const auth = (state = { token: false }, action) => {
    switch (action.type) {
        case 'USER_LOGIN_SUCCESSED':
            return action.payload;

        case 'USER_LOGIN_FAILED':
            return state;
            
        default:
            return state;
    }
}

export default auth;
