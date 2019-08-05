import { RECEIVE_SITE } from '../actions/site_actions';
import merge from 'lodash/merge';

const PhotosReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {

        case RECEIVE_SITE:
           
            return action.site || {};
        default:
            return state;
    }
};

export default PhotosReducer;