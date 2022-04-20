
import { createSelector } from 'reselect';

const getUsersSelector = (state) => {
    return state.usersPage.users
}

// Сложный селектор, создан с помошью reselect, служит для того
// чтобы не вызывать render() так как filter создает новый объект
// и connect принимает будьто state изменился и он не срабатывал постоянно

export const getUsers = createSelector(getUsersSelector,(users)=> {
    return users.filter (u => true)
}) 



export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}

