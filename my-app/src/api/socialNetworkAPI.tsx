import React from 'react';
import axios from 'axios';
import {LoginFormDataType} from '../components/Login/Login';
import {PhotosType, ProfileType} from '../components/Profile/Profile';
import {ProfileFormDataType} from '../components/Profile/ProfileInfo/ProfileForm/ProfileForm';
import {strict} from 'assert';


const setting = {
    withCredentials: true,
    headers: {'API-KEY': '5ce2c2dd-2872-4cf9-9287-1566cd6e0602'},
}


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    ...setting,
})


// API Objects

export const UsersAPI = {
    getUsers(pageSize = 10, currentPage = 1,) {
        return instance.get<GetUsersType>(`users?count=${pageSize}&page=${currentPage}`).then((res) => res.data)
    },
    foolowUser(userId: string, data = {},) {
        return instance.post<RequestType<{}>>(`follow/${userId}`, data).then((res) => res.data)
    },
    unfollowUser(userId: string,) {
        return instance.delete<RequestType<{}>>(`follow/${userId}`).then((res) => res.data)
    },
}

export const AuthAPI = {
    //Is current user authorized
    authMe() {
        return instance.get<RequestType<AuthMeDataType>>('auth/me').then(res => res.data)
    },
    //Authorize on the service
    login(data: LoginFormDataType) {
        return instance.post<RequestType<{ userId?: string }>>('auth/login', data).then(res => res.data)
    },
    //Unfollow requested user
    logout() {
        return instance.delete<RequestType<{}>>('auth/login').then(res => res.data)
    },
}

export const ProfileAPI = {
    getUserProfile(userId: string,) {
        return  instance.get<ProfileType>(`/profile/${userId}`).then(res => res.data)
    },
    updateUserProfile(profile: ProfileFormDataType) {
        return  instance.put<RequestType<{}>>(`/profile`,profile).then(res => res.data)
    },
    getUserStatus(userId: string,) {
        return instance.get<string>(`/profile/status/${userId}`).then(res => res.data)
    },
    updateUserStatus(status: string,) {
        return instance.put<RequestType<{}>>(`/profile/status/`, {status}).then(res => res.data)
    },
    changePhoto(image: File,) {
        const formData = new FormData();
        formData.append("image", image);
        return instance.put<RequestType<{photos:PhotosType}>>(`/profile/photo`, formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data)
    },
}

//Security workflow
export const SecurityAPI = {
    getCaptchaURL() {
        return  instance.get<{url:string}>(`security/get-captcha-url`).then(res => res.data)
    },
}

// Types

type GetUsersType = {
    'items': Array<ServerUserType>
    'totalCount': number
    'error': null | string
}

type ServerUserType = {
    name: string
    id: string
    uniqueUrlName: null | string
    photos: {
        small: null | string
        large: null | string
    },
    status: null | string
    followed: boolean
}


type RequestType<T> = {
    data: T
    messages: Array<string>
    fieldsErrors: Array<string>
    resultCode: number
}

type AuthMeDataType = {
    id: string
    login: string
    email: string
}