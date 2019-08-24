import * as ReviewApiUtil from '../util/review_api_util';

export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";

export const receiveReviews = reviews => {
   //debugger
    return(
        {
            type: RECEIVE_ALL_REVIEWS,
            reviews
        }
    )
}

export const receiveReview = review => {
   
    return (
        {
            type: RECEIVE_REVIEW,
            review
        }
    )
}

export const removeReview = review => {
  
    return (
        {
            type: REMOVE_REVIEW,
            reviewId: review.id
        }
    )
}

export const receiveReviewErrors = errors => {
    return (
        {
            type: RECEIVE_REVIEW_ERRORS,
            errors
        }
    )
}

export const fetchReviews = (siteId) => {
    
    return dispatch => {
        return ReviewApiUtil.fetchReviews(siteId)
        
        .then(
            
            reviews => {
                //debugger
                return dispatch(receiveReviews(reviews))
            }
        )
    }
}

export const fetchReview = (reviewId) => {
    return dispatch => {
       
        return ReviewApiUtil.fetchReview(reviewId)
            .then(
                review => {
                   
                    return dispatch(receiveReview(review))
                }
            )
    }
}

export const createReview = (siteId, review) => {
    return dispatch => {
       
        return ReviewApiUtil.createReview(siteId, review)
            .then(
                review => {
                    
                    return dispatch(receiveReview(review))
                }
            )
    }
}

export const updateReview = (siteId,review) => {
    return dispatch => {
        
        return ReviewApiUtil.updateReview(siteId, review)
            .then(
                review => {
                   
                    return dispatch(receiveReview(review))
                }
            )
    }
}

export const deleteReview = (reviewId) => {
    return dispatch => {
        return ReviewApiUtil.deleteReview(reviewId)
            .then(
                review => {
                    return dispatch(removeReview(review))
                }
            )
    }
}

