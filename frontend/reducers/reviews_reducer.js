import { RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW} from '../actions/review_actions';
import merge from 'lodash/merge';

const defaultState = {}

const reviewsReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_ALL_REVIEWS:
            return merge({},state,action.reviews);
            case RECEIVE_REVIEW:
             
                return merge({},state, {[action.review.id]: action.review});
                case REMOVE_REVIEW:
                    debugger
                    let a = merge({},state)
                    delete a[action.reviewId]
                    return a;
                    default:
                        return state;
    }
}

export default reviewsReducer;