import { connect } from 'react-redux';
import { fetchReview, updateReview, deleteReview } from '../../actions/review_actions';
import { fetchSite } from '../../actions/site_actions';
import EditReview from './edit_review';
import { withRouter } from 'react-router';

const msp = (state, ownProps) => {
   
    return {
        //reviews: state.entities.reviews,
        review: state.entities.reviews[ownProps.match.params.reviewId],
        current_user: state.session.id,
        site: state.entities.sites[ownProps.match.params.siteId],
    }
};

const mdp = dispatch => ({
    fetchReview: reviewId => dispatch(fetchReview(reviewId)),
    updateReview: (siteId, review) => dispatch(updateReview(siteId, review)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId)),
    fetchSite: siteId => dispatch(fetchSite(siteId))
});

export default connect(msp, mdp)(withRouter(EditReview));