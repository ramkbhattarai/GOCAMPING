import { RECEIVE_ALL_SITES, RECEIVE_SITE } from '../actions/site_actions';
import merge from 'lodash/merge'
const _siteDefault = {};

const sitesReducer = (state = _siteDefault, action) => {
    Object.freeze(state);
    switch(action.type){
    
        case RECEIVE_ALL_SITES:
            //debugger
            return merge({}, state, action.sites)
            case RECEIVE_SITE:
                return merge({}, state, {[action.site.id]: action.site}) 
                default:
                    return state 

    }
}

export default sitesReducer;