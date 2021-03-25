import {
    authReducer,
    AuthStateType,
    AuthUserData,
    getAuthUserPhoto, logOutAuthUserData,
    setAuthUserData,
    toggleIsFetchingInAuthReducer
} from './authReducer';


let startState = {} as AuthStateType

beforeEach(() => {
    startState = {
        id: null,
        login: null,
        email: null,
        isAuth: false,
        isFetching: false,
        userPhoto: null,
    }
})

test('the current user must be logged in state', () => {
    let data: AuthUserData = {
        id: '12652',
        login: '@testMan',
        email: 'test@gmail.com',
    }
    let action = setAuthUserData(data)
    const endState = authReducer(startState, action);
    expect(endState.id).toBe('12652')
    expect(endState.isFetching).toBeFalsy()
    expect(endState.userPhoto).toBeNull()
    expect(endState.email).toBe('test@gmail.com')
    expect(endState.isAuth).toBeTruthy()
})


test('photo of user must be added to profile', () => {
    let data: string | null = 'https://www.google.com/photo'
    let action = getAuthUserPhoto(data)
    const endState = authReducer(startState, action);
    expect(endState.id).toBeNull();
    expect(endState.isAuth).toBeFalsy()
    expect(endState.userPhoto).toBe(data)
})


test('value of IsFetching should be update', () => {
    let data: boolean = true
    let action = toggleIsFetchingInAuthReducer(data)
    const endState = authReducer(startState, action);
    expect(endState.id).toBeNull();
    expect(endState.isAuth).toBeFalsy()
    expect(endState.userPhoto).toBeNull();
    expect(endState.isFetching).toBeTruthy()
})


test('log out user from network', () => {
    let newStartState: AuthStateType = {
        id: '123132',
        login: '@testMan',
        email: 'test@gmail.com',
        isAuth: true,
        isFetching: false,
        userPhoto: 'https://www.google.com/photo',
    }
    let action = logOutAuthUserData()
    const endState = authReducer(newStartState, action);
    expect(endState.id).toBeNull();
    expect(endState.userPhoto).toBeNull();
    expect(endState.isFetching).toBeFalsy()
    expect(endState.login).toBeNull()
    expect(endState.isAuth).toBeFalsy()
})