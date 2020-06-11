import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": "c78d3c14-7774-46f3-9218-689064402ee0"
    }
});

const nytimes = axios.create({
    withCredentials: true,
//     baseURL:'https://api.nytimes.com/svc/mostpopular/v2/',
    headers: {
        "api-key": "8IjHtVfzGTMx5PDNMkfafG9W33r5yBwG"
    }
});

export const NYTimesAPI = {
    getArticles(period){
        return nytimes.get(`https://api.nytimes.com/svc/mostpopular/v2/shared/${period}.json`)
        //return nytimes.get(`/shared/${period}.json?api-key=8IjHtVfzGTMx5PDNMkfafG9W33r5yBwG`)
    }
}

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },

    getFriends(isFollowed=true) {
        return instance.get(`/users?friend=${isFollowed}`)
            .then(response => {
                return response.data
            });
    },

    unfollowUser(userId) {
        return instance.delete(`/follow/${userId}`)
            .then(response => {
                return response.data
            });
    },
    followUser(userId) {
        return instance.post(`/follow/${userId}`)
            .then(response => {
                return response.data
            });
    }
}

export const authAPI = {
    authMe() {
        return instance.get(`/auth/me`)
            .then(response => {
                return response.data
            })
    },
    loginMe(email, password, rememberMe = false) {
        return instance.post(`/auth/login`, {email, password, rememberMe})
            .then(response => {
                return response.data
            })
    },
    logoutMe() {
        return instance.delete(`/auth/login`)
            .then(response => {
                return response.data
            })
    }

}

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`/profile/${userId}`)
            .then(response => {
                return response.data
            });
    },
    getStatus(userId) {
        return instance.get(`/profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`/profile/status/`, { status: status })
    }
}