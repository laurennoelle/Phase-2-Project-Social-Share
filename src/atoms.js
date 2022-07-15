import { atom } from 'recoil';

export const database = atom({
    key: 'database',
    default: []
})

export const makeNewFriend = atom({
    key: 'newFriend',
    default: ""
})

export const makeNewPostTitle = atom({
    key: 'newPostTitle',
    default: ""
})

export const makeNewPostContent = atom({
    key: 'makeNewPostContent',
    default: ""
})

export const currentFriends = atom({
    key: 'currentFriends',
    default: []
})

export const postFeed = atom({
    key: 'postFeed',
    default: []
})

export const loginUserUsername = atom({
    key: 'myLoginUserUsername',
    default: ''
})

export const loginUserPassword = atom({
    key: 'myLoginPassword',
    default: ''
})

export const registerUserEmail = atom({
    key: 'myUserEmail',
    default: ''
})

export const registerUserUsername = atom({
    key: 'myUserUsername',
    default: ''
})

export const registerUserPassword = atom({
    key: 'myPassword',
    default: ''
})

export const registerUserFirstName = atom({
    key: 'myUserFirstName',
    default: ''
})

export const registerUserLastName = atom({
    key: 'myUserLastName',
    default: ''
})

export const registerUserMonth = atom({
    key: 'myUserMonth',
    default: ''
})

export const registerUserDay = atom({
    key: 'myUserDay',
    default: ''
})

export const registerUserYear = atom({
    key: 'myUserYear',
    default: ''
})

export const registerUserAvatar = atom({
    key: 'myUserAvatar',
    default: ''
})

export const isUserLoggedIn = atom({
    key: 'myUserLoggedIn',
    default: false,
})

export const currentUser = atom({
    key: 'myCurrentUser',
    default: "",
})

export const currentUserObject = atom({
    key: 'myCurrentUserObject',
    default: null,
})