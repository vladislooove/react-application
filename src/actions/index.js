export const logIn = (email, password) => {
    return {
        type: 'USER_LOGIN_REQUESTED',
        payload: {
            email,
            password
        }
    }
}

export const getUsersList = (page) => {
    return {
        type: 'USERS_LIST_FETCH_REQUESTED',
        payload: {
            page
        }
    }
}