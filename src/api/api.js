import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": "c78d3c14-7774-46f3-9218-689064402ee0"
    }
});

const music = axios.create({
    baseURL: 'https://deezerdevs-deezer.p.rapidapi.com',
    headers: {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "2abf5dd724msh6dde583f1c5bf94p11365ajsnc0bb242cba25"
    }
});

export  const executeJS = async()=> {
     const url = "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=8IjHtVfzGTMx5PDNMkfafG9W33r5yBwG";
    const options = {
        method: "GET",
        headers: {
            "Accept": "application/json",
        }
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}


export const musicAPI =
    { getSongsByArtist(artist) {
           return music.get(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${artist}`)
               .then(response => {
                   return response.data
               });
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
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put(`/profile/photo`,formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
}