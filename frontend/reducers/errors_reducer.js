import {combineReducers} from 'redux';
import sessionErrorsReducer from './session_errors_reducers';


const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    sites: siteErrorsReducer
})

export default errorsReducer;