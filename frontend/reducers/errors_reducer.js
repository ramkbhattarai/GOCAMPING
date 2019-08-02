import {combineReducers} from 'redux';
import sessionErrorsReducer from './session_errors_reducers';
import reviewErrorsReducer from './review_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    sites: siteErrorsReducer,
    reviews: reviewErrorsReducer
})

export default errorsReducer;