import { RECEIVE_ALL_SITES, RECEIVE_SITE, CREATE_SITE, DESTROY_SITE } from '../actions/site_actions';
import merge from 'lodash/merge'
const _siteDefault = {};

const sitesReducer = (state = _siteDefault, action) => {
    Object.freeze(state);
    switch(action.type){
    
        case RECEIVE_ALL_SITES:
           
            return merge({}, state, action.sites)
            case RECEIVE_SITE:
                
                return merge({}, state, {[action.site.id]: action.site})
                case CREATE_SITE:
                    return merge({}, state, action.site)
                    case DESTROY_SITE:
                        let newstate = merge({}, state);
                        delete newstate[action.siteId]
                        return newstate
                default:
                    return state 

    }
}

export default sitesReducer;