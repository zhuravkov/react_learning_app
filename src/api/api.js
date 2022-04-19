import * as axios from 'axios';

// создаем инстанс аксиоса чтобы сохранить в 1 месте все настройки и потом обращаться к ним
const instance = axios.create({
    baseURL: 'http://localhost:8000/api/',
    withCredentials: true
});


// для удобства работы упаковываем методы апишек(можно по эндпоинтам) в объекты

export const usersAPI = {
    getUsers (currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&on_page=${pageSize}`) 
        // возващаем в промисе не всё что пришло в response а только data
        .then(response => response.data);
}};

export const folowingAPI = {
    unfollowAPI (id) {
        return instance.delete(`follow/${id}`)
        .then(response => response.data);
    },
    followAPI (id) {
        return instance.post(`follow/${id}`,{})
        .then(response => response.data);
    },
    checkFollowingAPI (id) {
        return instance.get(`follow/${id}`)
        .then(response => response.data);
    },
}

export const authAPI = {
    authMe () {
        return instance.get(`auth/me`)
        .then(response => response.data);
    },
    login (username, password) {
        return instance.post(`/login`, {username, password})
        .then(response => response.data);
    },
    logout () {
        return instance.delete(`/login`)
        .then(response => response.data);
    },
}

export const profileAPI = {
    usersProfile (id) {
        return instance.get(`profile/${ id }`)
        .then(response => response.data);
    },
    getStatus (id) {
        return instance.get(`profile/status/${ id }`)
        .then(response => response.data);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status : status })
        .then(response => response.data);
    }




}