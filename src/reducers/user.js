const user = (state = { }, action) => {
    switch (action.type) {
        case 'USER_FETCH_SUCCESSED':
            return action.payload;

        case 'USER_FETCH_FAILED':
            return state;
    
        default:
            return state;
    }
}

export default user;
