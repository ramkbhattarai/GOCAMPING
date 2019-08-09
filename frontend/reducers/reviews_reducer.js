import { RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW} from '../actions/review_actions';
import merge from 'lodash/merge';
import { RECEIVE_SITE } from '../actions/site_actions';

const defaultState = {}

const reviewsReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_ALL_REVIEWS:
            //return action.reviews;
            return merge({},state,action.reviews);
            case RECEIVE_REVIEW:

           // return  action.review;
            
                return merge({},state, {[action.review.id]: action.review});
                case REMOVE_REVIEW:
                   
                    let a = merge({},state)
                    delete a[action.reviewId]
                    return a;

                    // case RECEIVE_SITE:
                    //     return action.site;
                    default:
                        return state;
    }
}

export default reviewsReducer;