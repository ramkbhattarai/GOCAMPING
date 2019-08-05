import { RECEIVE_SITE } from '../actions/site_actions';
import merge from 'lodash/merge';

const PhotosReducer = (state = {}, action) => {
    Object.freeze(state);
    debugger
    switch (action.type) {
        case RECEIVE_SITE:
            return action.site.photos || {};
        default:
            return state;
    }
};

export default PhotosReducer;