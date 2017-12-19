import { combineReducers } from 'redux';

import loading from './loading';
import auth from './auth';
import users from './users';
import user from './user';
import resources from './resources';

const combinedStore = combineReducers({
    loading,
    auth,
    users,
    user,
    resources
});

export default combinedStore;