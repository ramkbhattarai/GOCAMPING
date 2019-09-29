import { combineReducers } from 'redux';
import users from './users_reducers';
import sites from './sites_reducer';
import reviews from './reviews_reducer';

import bookings from './bookings_reducer';

export default combineReducers({
    users,
    sites,
    
    reviews,
    bookings
});
