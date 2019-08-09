import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const ReviewIndexItem = ({ review, deleteReview, currentUserId }) => {

    if (review.author_id === currentUserId) {
        let createDate = format(review.created_at, 'MMMM Do, YYYY')
        return (
            <div className='review-index-item'>
                <div className='review-item-values'>
                    <li className='review-user-name'>
                        <div className="review_name">{review.author.fname}</div>
                        <div className="review_date">{createDate}</div>
                    </li>
                    <li className='review-user-description'>{review.body}</li>
                </div>
                <div className='delete-edit-review'>
                    <Link className='edit-review-button' to={`/sites/${review.site_id}/reviews/${review.id}`}>Edit</Link>
                    <li><button className='delete-review-button' onClick={() => deleteReview(review.id)}>Delete</button></li>
                </div>
            </div>
        )
    } else {
        let createDate = format(review.created_at, 'MMMM Do, YYYY')
        return (
            <div className='review-index-item'>
                <div className='review-item-values'>
                    <li className='review-user-name'>
                        <div className="review_name">{review.author.fname}</div>
                        <div className="review_date">{createDate}</div>
                    </li>
                    <li className='review-user-description'>
                        {review.body}
                    </li>
                </div>
            </div>
        )
    }
};

export default ReviewIndexItem;