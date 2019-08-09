export const fetchReviews = (siteId) => {
    return(
        $.ajax(
            {
                method: 'get',
                url: `api/sites/${siteId}/reviews`
            }
        )
    )
}

export const fetchReview = (reviewId) => {
    return(
        $.ajax(
            {
                method: 'get',
                url: `api/reviews/${reviewId}`
            }
        )
    )
}

export const createReview = (review, siteId) => {
    return(
        $.ajax(
            {
                method: 'post',
                url: `api/sites/${siteId}/reveiws`,
                data: {review}
            }
        )
    )
}

export const updateReview = (review, siteId) => {
    return(
        $.ajax(
            {
                method: 'patch',
                url: `api/sites/${siteId}/reviews/${review.id}`,
                data: review
            }
        )
    )
}

export const deleteReview =(reviewId) =>{
    return(
        $.ajax(
            {
                method: 'destroy',
                url: `api/reviews/${reviewId}`
            }
        )
    )
}