import axios from 'axios';

const apiPrefix = 'https://reqres.in/';

export default {
    logIn(data) {
        return axios.post(`${apiPrefix}api/login`, data);
    },

    getUsersList(page) {
        return axios.get(`${apiPrefix}api/users?page=${page}`);
    },

    getUser(id) {
        return axios.get(`${apiPrefix}api/users/${id}`);
    },
    
    deleteUser(id) {
        return axios.delete(`${apiPrefix}api/users/${id}`);        
    },

    updateUser(id, data) {
        return axios.put(`${apiPrefix}api/users/${id}`, data.firstName, data.lastName);        
    },

    getResourcesList(page) {
        return axios.get(`${apiPrefix}api/unknown?page=${page}`);
    },
}
