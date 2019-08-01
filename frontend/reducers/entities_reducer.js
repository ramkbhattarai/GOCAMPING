import { combineReducers } from 'redux';
import users from './users_reducers';
import sites from './sites_reducer';

export default combineReducers({
    users,
    sites
});
