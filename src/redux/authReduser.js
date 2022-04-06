const SET_USER_DATA = 'SET_USER_DATA';



let inicialState = {
    userId : null,
    email : null,
    login : null,
    // isFetching: false

}

const authReduser = (state = inicialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
                }
            




        
        default:
            return state;
    }


}


export const setUserData = (userId, email, login) => ({type: SET_USER_DATA, data:{userId, email, login}})



export default authReduser