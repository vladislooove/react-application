import { combineReducers } from 'redux';

import loading from './loading';
import auth from './auth';
import users from './users';

const combinedStore = combineReducers({
    loading,
    auth,
    users
});

export default combinedStore;