import React, { Component } from 'react';

import ReviewIndexItem from './review_index_item';

class ReviewIndex extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchReviews(this.props.match.params.siteId);
    }
   

    render() {
       
        if (!this.props.reviews || !this.props.currentSite) {
            return null;
        }
        //debugger
        const reviews = Object.values(this.props.reviews).map(review => {
           
            return (
                <ReviewIndexItem
                    key={review.id}
                    review={review}
                    deleteReview={this.props.deleteReview}
                    currentUserId={this.props.currentUserId}
                    // currentSite={this.props.currentSite}
                />
            )
        })

        return (
            <ul className="reviews_container">
                {reviews}
            </ul>
        );
    }
}

export default ReviewIndex;
