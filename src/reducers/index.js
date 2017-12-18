import { combineReducers } from 'redux';

import loading from './loading';
import auth from './auth';
import users from './users';
import user from './user';

const combinedStore = combineReducers({
    loading,
    auth,
    users,
    user
});

export default combinedStore;