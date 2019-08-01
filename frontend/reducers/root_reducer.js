import { combineReducers } from 'redux';

import entities from './entities_reducer';
import session from './session_reducer';
import errors from './session_errors_reducers';
import ui from './ui_reducers';

const rootReducer = combineReducers(
    
    {
   
    entities,
    session,
    errors,
    ui
}
);

export default rootReducer;
