import {appReducer, AppStateType, authorizeUserSuccess} from './appReducer';

let startState = {} as AppStateType

beforeEach(() => {
    startState = {
        authorize: false,
    }
})


test('the current user must be authorized in state', () => {
    let action = authorizeUserSuccess(true)
    const endState = appReducer(startState, action);
    expect(endState.authorize).toBeTruthy()})
