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

export const createReview = (siteId, review ) => {
    
    return(
        $.ajax(
            {
                method: 'post',
                url: `api/sites/${siteId}/reviews`,
                data: {review}
            }
        )
    )
}

export const updateReview = (siteId, review) => {
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
                method: 'delete',
                url: `api/reviews/${reviewId}`
            }
        )
    )
}