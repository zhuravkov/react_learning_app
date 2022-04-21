
import { usersAPI, folowingAPI } from './../api/api';
import { updateObjectInArray } from '../utils/object-helpers';


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let inicialState = {
    users : [],
    pageSize : 4,
    totalUsersCount : 1,
    currentPage : 1,
    isFetching: false,
    followingInProgress: []

}

const usersReduser = (state = inicialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id",{followed: true})
                // убрали map в отдельную функцию
                // users: state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return {...u, followed: true}
                //     }
                //     return u;
                // })
            }
        case UNFOLLOW:

            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id",{followed: false})
                
                // users: state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return {...u, followed: false}
                //     }
                //     return u;
                // })
            }
            
        case SET_USERS:
            return {...state, users:[...action.users]} //Вместо [...state.users, ...action.users] чтобы не рисовало 2 раза
        
        case SET_CURRENT_PAGE:
            return {...state, currentPage:action.currentPage} //меняем свойство

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount:action.totalUsersCount}

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching:action.isFetching}

        case TOGGLE_IS_FOLLOWING_PROGRESS:


            return {
                ...state, 
                // добавляет и удаляет нажатые но не обработанные кнопки запроса, 
                // чтобы не отправить одно и тоже несколько раз
                followingInProgress: action.isFetching
                ? [...state.followingInProgress, action.id]
                : state.followingInProgress.filter( id => id !== action.id)
            }
        

        default:
            return state;
    }


}



const setUsers = (users) => ({type: SET_USERS, users})
const toggleIsFething = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})

const followSuccess = (userId) => ({type: FOLLOW, userId})
const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
const toggleFollowingInProgress = (isFetching, id) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, id})



export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})




// САНКА 
export const getUsersThunkCreator = (currentPage,pageSize) => {
    // Замыкание

    // вводим  async  await вместо .then
    return async (dispatch) => {

        // здесь мы диспатчим обычный экшн который выше определиси создав его АС 
        // больше не нужно его прокидывать по пропсам, всё происходит здесь
        dispatch(toggleIsFething(true));

        // обращаемся в DAL вместо сервера и там выполняется запрос, сюда возвращается только data
        /* чтобы санка могла взять внешние аргументы мы ее оборачиваем другой функцией 
         которая вызывается с нужными аргументами и с помощью замыкания получаем к ним доступ*/

        // ждём пока выполнися запрос и идем дальше
        let data = await usersAPI.getUsers(currentPage, pageSize);

        dispatch(toggleIsFething(false));
        // АПИ вернул пользователей и мы их засетили сдесь же
        dispatch(setUsers(data.users));
        dispatch(setTotalUsersCount(data.count))
    }
}

// видим что follow/ Unfollow похожи, дублирование кода-ЗЛО 
// выносим в отдельную функцию логику и потом вызываем
const followUnfollowFlow = async(dispatch,id,apiMethod, actionCreator) => {
    dispatch(toggleFollowingInProgress(true, id))
    let data = await apiMethod(id);
    if (data.resultCode == 0) { 
        dispatch(actionCreator(id)) }
    dispatch(toggleFollowingInProgress(false, id))
}




export const follow = (id) =>{
    return async (dispatch) => {
    // всё лежит в отдельной функции, убрали дублирование
    followUnfollowFlow(dispatch, id, folowingAPI.followAPI.bind(folowingAPI), followSuccess)    
    }
}


export const unfollow = (id) => {
    return async (dispatch) => {
        // всё лежит в отдельной функции, убрали дублирование
        followUnfollowFlow(dispatch, id, folowingAPI.unfollowAPI.bind(folowingAPI), unfollowSuccess)
    }
}




export default usersReduser