import { authAPI } from './../api/api';

const SET_USER_DATA = 'SET_USER_DATA';




let inicialState = {
    userId : null,
    email : null,
    login : null,
    isAuth : false
    // isFetching: false

}

const authReduser = (state = inicialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
                }

        default:
            return state;
    }


}


const setAuthUserData = (userId, login, email) => ({type: SET_USER_DATA, data:{userId, login, email}})

export const authUserThunk = () =>{
    return (dispath) =>{
        
        authAPI.authMe()
        .then(data => {
            if (data.resultCode ===0 ) {
                let {id, login, email} = data.data
                
                dispath(setAuthUserData(id, login, email));
            }
        })
    }
}

export default authReduser