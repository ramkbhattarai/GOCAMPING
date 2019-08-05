import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/sessions_actions';
import {RECEIVE_SITE} from '../actions/site_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, state, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_SITE:
        
            return merge({}, state, {[action.site.host.id]: action.host});
        default:
            return state;
    }
};

export default usersReducer;
