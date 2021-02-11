import React from 'react';
import axios from 'axios';
import {LoginFormDataType} from '../components/Login/Login';
import {ProfileType} from '../components/Profile/Profile';


const setting = {
    withCredentials: true,
    headers: {'API-KEY': 'ee542fb7-1a9c-4a81-99e7-a73b8549f173'},
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
    getUserStatus(userId: string,) {
        return instance.get<string>(`/profile/status/${userId}`).then(res => res.data)
    },
    updateUserStatus(status: string,) {
        return instance.put<RequestType<{}>>(`/profile/status/`, {status}).then(res => res.data)
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