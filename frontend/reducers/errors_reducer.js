import {combineReducers} from 'redux';
import sessionErrorsReducer from './session_errors_reducers';


const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    site: siteErrorsReducer
})

export default errorsReducer;