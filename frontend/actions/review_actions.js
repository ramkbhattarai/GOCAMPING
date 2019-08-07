// import * as ReviewApiUtil from '../util/review_api_util';

// export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
// export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
// export const REMOVE_REVIEW = "REMOVE_REVIEW";
// export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";

// export const receiveReviews = reviews => {
//     return(
//         {
//             type: RECEIVE_ALL_REVIEWS,
//             reviews
//         }
//     )
// }

// export const receiveReview = review => {
//     return (
//         {
//             type: RECEIVE_REVIEW,
//             review
//         }
//     )
// }

// export const removeReview = review => {
//     return (
//         {
//             type: REMOVE_REVIEW,
//             reviewId: review.id
//         }
//     )
// }

// export const receiveReviewErrors = errors => {
//     return (
//         {
//             type: RECEIVE_REVIEW_ERRORS,
//             errors
//         }
//     )
// }

// export const fetchReviews = () => {
//     return dispatch => {
//         return ReviewApiUtil.fetchReviews()
//         .then(
//             reviews => {
//                 return dispatch(receiveReviews(reviews))
//             }
//         )
//     }
// }

// export const fetchReview = (id) => {
//     return dispatch => {
//         return ReviewApiUtil.fetchReview(id)
//             .then(
//                 review => {
//                     return dispatch(receiveReview(review))
//                 }
//             )
//     }
// }

// export const createReview = (review) => {
//     return dispatch => {
//         return ReviewApiUtil.createReview(review)
//             .then(
//                 review => {
//                     return dispatch(receiveReview(review))
//                 }
//             )
//     }
// }

// export const updateReview = (review) => {
//     return dispatch => {
//         return ReviewApiUtil.updateReview(review)
//             .then(
//                 review => {
//                     return dispatch(receiveReview(review))
//                 }
//             )
//     }
// }

// export const destroyReview = (id) => {
//     return dispatch => {
//         return ReviewApiUtil.deleteReview(id)
//             .then(
//                 review => {
//                     return dispatch(removeReview(review))
//                 }
//             )
//     }
// }

// export const fetchReviewErrors = (errors) => {
//     return dispatch => {
//         return ReviewApiUtil.fetchReviewErrors(errors)
//             .then(
//                 errors => {
//                     return dispatch(receiveReviewErrors(errors))
//                 }
//             )
//     }
// }