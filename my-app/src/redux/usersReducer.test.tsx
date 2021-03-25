import {appReducer, AppStateType, authorizeUserSuccess} from './appReducer';
import {
    follow_userSUCCESS,
    set_users, set_users_currentPageSUCCESS, set_users_total_count,
    unfollow_userSUCCESS,
    UsersPagePropsType,
    usersReducer,
    UsersType
} from './usersReducer';


let startState = {} as UsersPagePropsType

beforeEach(() => {
    startState = {
        users: [
            {
                followed: true,
                id: '123',
                name: '@max',
                photos: {
                    large: null,
                    small: null,
                },
                status: 'test',
                uniqueUrlName: 'testUniqueUrlName',
            }, {
                followed: false,
                id: '456',
                name: '@adam',
                photos: {
                    large: 'photosLarge',
                    small: null,
                },
                status: null,
                uniqueUrlName: null,
            }, {
                followed: false,
                id: '789',
                name: '@joe',
                photos: {
                    large: 'photosLarge',
                    small: 'photossmall',
                },
                status: 'newStatus',
                uniqueUrlName: 'newUniqueUrlName',
            },
        ],
        totalCount: 0,
        pageSize: 9,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [] as Array<string>,
    }
})


test('following value current must be false', () => {
        let action = follow_userSUCCESS(startState.users[2].id)
        const endState = usersReducer(startState, action);
        expect(endState.users[2].followed).toBeFalsy()
        expect(endState.users[0].followed).toBeTruthy()
        expect(endState.users[2].name).toBe('@joe')
        expect(endState.totalCount).toBe(0)
        expect(endState.isFetching).toBeFalsy()
    }
)
test('following value current must be true', () => {
        let action = unfollow_userSUCCESS(startState.users[2].id)
        const endState = usersReducer(startState, action);
        expect(endState.users[2].followed).toBeTruthy()
        expect(endState.users[0].followed).toBeTruthy()
        expect(endState.users[1].name).toBe('@adam')
        expect(endState.pageSize).toBe(9)
        expect(endState.isFetching).toBeFalsy()
    }
)

test('add new users to sate', () => {
let newUsersArray = [
    {
        followed: true,
        id: 'qwe',
        name: '@niki',
        photos: {
            large: "null",
            small: "null",
        },
        status: 'status value',
        uniqueUrlName: 'testUniqueUrlName',
    }, {
        followed: false,
        id: 'asd',
        name: '@sam',
        photos: {
            large: 'newPhoto',
            small: null,
        },
        status: null,
        uniqueUrlName: null,
    },
]
        let action = set_users(newUsersArray)
        const endState = usersReducer(startState, action);
        expect(endState.users.length).toBe(2)
        expect(endState.users[0].name).toBe( '@niki')
        expect(endState.totalCount).toBe(0)
        expect(endState.users[0].followed).toBeTruthy()
    }
)


test('value of total count must be changed', () => {
        let action = set_users_total_count(13)
        const endState = usersReducer(startState, action);
        expect(endState.users[2].followed).toBeFalsy()
        expect(endState.users[0].followed).toBeTruthy()
        expect(endState.users[1].name).toBe('@adam')
        expect(endState.pageSize).toBe(9)
        expect(endState.totalCount).toBe(13)
    }
)


test('value of current page must be changed', () => {
        let action = set_users_currentPageSUCCESS(6)
        const endState = usersReducer(startState, action);
        expect(endState.users[2].followed).toBeFalsy()
        expect(endState.users[0].followed).toBeTruthy()
        expect(endState.users[1].name).toBe('@adam')
        expect(endState.pageSize).toBe(9)
        expect(endState.currentPage).toBe(6)
    }
)