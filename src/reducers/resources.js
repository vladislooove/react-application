const resources = (state = { page: 1, list: [] }, action) => {
    switch (action.type) {
        case 'RESOURCES_LIST_FETCH_SUCCESSED':
            return {
                page: action.payload.page,
                list: [
                    ...state.list,
                    ...action.payload.list
                ],
                totalPages: action.payload.totalPages,
            };

        case 'RESOURCES_LIST_FETCH_FAILED':
            return state;

        default:
            return state;
    }
}

export default resources;
