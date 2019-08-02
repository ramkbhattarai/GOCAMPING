import { combineReducers } from 'redux';
import users from './users_reducers';
import sites from './sites_reducer';
import reviews from './session_errors_reducers';

export default combineReducers({
    users,
    sites,
    reviews
});
