export const fetchReviews = () => {
    return(
        $.ajax(
            {
                method: 'get',
                url: 'api/reviews'
            }
        )
    )
}

export const fetchReview =(id) => {
    return(
        $.ajax(
            {
                method: 'get',
                url: `api/reviews/${id}`
            }
        )
    )
}

export const createReview = review => {
    return(
        $.ajax(
            {
                method: 'post',
                url: 'api/reveiws',
                data: {review}
            }
        )
    )
}

export const updateReview = review => {
    return(
        $.ajax(
            {
                method: 'patch',
                url: `api/reviews/${review.id}`,
                data: review
            }
        )
    )
}

export const deleteReveiw =(id) =>{
    return(
        $.ajax(
            {
                method: 'destroy',
                url: `api/reviews/${id}`
            }
        )
    )
}