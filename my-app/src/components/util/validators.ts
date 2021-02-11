import React from 'react'

export const required = (value:number) => (value || typeof value === 'number' ? undefined : 'Required')

 const maxLength = (max:number) => (value:string) =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined

export const maxLength30=maxLength(30)

 const minLength = (min:number) => (value:string) =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined

export const minLength5=minLength(5)


export const emailValidator = (value:string) =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined

