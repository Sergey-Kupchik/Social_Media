import React from 'react';
import axios from 'axios';


const setting = {
    withCredentials: true,
    headers: {'API-KEY': 'ee542fb7-1a9c-4a81-99e7-a73b8549f173'},
}


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    ...setting,
})

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

type AuthMeDataType ={
    id: string
    login: string
    email: string
}


export const UsersAPI = {
    getUsers(pageSize = 10, currentPage = 1,) {
        return instance.get<GetUsersType>(`users?count=${pageSize}&page=${currentPage}`).then((res) => res.data)
    },
    foolowUser(userId: string, data={},) {
        return instance.post<RequestType<{}>>(`follow/${userId}`, data).then((res) => res.data)
    },
    unfollowUser(userId: string,) {
        return instance.delete<RequestType<{}>>(`follow/${userId}`).then((res) => res.data)
    },
}

export const AuthAPI ={
    authMe() {
        return instance.get<RequestType<AuthMeDataType>>('auth/me').then(res=>res.data.data)

    }
}



