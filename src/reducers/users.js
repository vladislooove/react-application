const users = (state = { page: 1, list: [] }, action) => {
    switch (action.type) {
        case 'USERS_LIST_FETCH_SUCCESSED':
            return {
                page: action.payload.page,
                list: [
                    ...state.list,
                    ...action.payload.list
                ]
            };

        case 'USERS_LIST_FETCH_FAILED':
            return state;

        default:
            return state;
    }
}

export default users;
