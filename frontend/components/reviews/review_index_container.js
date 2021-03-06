import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ReviewIndex from './review_index';
import { fetchReviews, fetchReview, deleteReview } from '../../actions/review_actions';

const msp = (state, ownProps) => {
  //debugger
    return {
        reviews: state.entities.reviews,
        currentUserId: state.session.id,
        currentSite: state.entities.sites[ownProps.match.params.siteId]
    };
};

const mdp = dispatch => ({
    fetchReviews: siteId => dispatch(fetchReviews(siteId)),
    fetchReview: reviewId => dispatch(fetchReview(reviewId)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId)),
});

export default withRouter(connect(msp, mdp)(ReviewIndex));
