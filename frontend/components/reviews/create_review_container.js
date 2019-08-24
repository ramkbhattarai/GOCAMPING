import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import CreateReview from './create_review';
import {createReview, fetchReviews, fetchReview, deleteReview} from '../../actions/review_actions';
import { fetchSite } from '../../actions/site_actions';

const msp = (state, ownProps) => ({
    reviews: state.entities.reviews,
    current_user: state.session.id,
    site: state.entities.sites[ownProps.match.params.siteId]
});

const mdp = dispatch => ({
    createReview: (siteId, review) => dispatch(createReview(siteId, review)),
    fetchSite: (siteId) => dispatch(fetchSite(siteId)),

    fetchReviews: (siteId) => dispatch(fetchReviews(siteId)),
    fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
    
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
    
});

export default withRouter(connect(msp, mdp)(CreateReview));