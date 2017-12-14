const users = (state = [], action) => {
    switch (action.type) {
        case 'USERS_LIST_FETCH_SUCCESSED':
            console.log(action)
            return action.payload;

        case 'USERS_LIST_FETCH_FAILED':
            return false;

        default:
            return [];
    }
}

export default users;
