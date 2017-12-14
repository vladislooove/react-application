const auth = (state = false, action) => {
    switch (action.type) {
        case 'USER_LOGIN_SUCCESSED':
            return true;

        case 'USER_LOGIN_FAILED':
            return false;
            
        default:
            return false;
    }
}

export default auth;
