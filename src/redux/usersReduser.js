
import { usersAPI, folowingAPI } from './../api/api';


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
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
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
    return (dispatch) => {

        // здесь мы диспатчим обычный экшн который выше определиси создав его АС 
        // больше не нужно его прокидывать по пропсам, всё происходит здесь
        dispatch(toggleIsFething(true));

        // обращаемся в DAL вместо сервера и там выполняется запрос, сюда возвращается только data
        /* чтобы санка могла взять внешние аргументы мы ее оборачиваем другой функцией 
         которая вызывается с нужными аргументами и с помощью замыкания получаем к ним доступ*/
        usersAPI.getUsers(currentPage, pageSize).then(data => {

            dispatch(toggleIsFething(false));
            // АПИ вернул пользователей и мы их засетили сдесь же
            dispatch(setUsers(data.users));
            dispatch(setTotalUsersCount(data.count))
        })
    }
}


export const follow = (id) =>{
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, id))
        folowingAPI.followAPI(id)
                .then(data => { if (data.resultCode == 0) { 
                    dispatch(followSuccess(id)) }
                    dispatch(toggleFollowingInProgress(false, id))
        })
    }
}


export const unfollow = (id) =>{
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, id))
        folowingAPI.unfollowAPI(id)
                .then(data => { if (data.resultCode == 0) { 
                    dispatch(unfollowSuccess(id)) }
                    dispatch(toggleFollowingInProgress(false, id))
        })
    }
}




export default usersReduser