import {combineReducers} from 'redux';
import sessionErrorsReducer from './session_errors_reducers';

import bookings from './booking_errors_reducer';
import siteErrorsReducer from './site_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    sites: siteErrorsReducer,
    
    bookings: bookings,
})

export default errorsReducer;