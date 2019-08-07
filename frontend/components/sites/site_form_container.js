import { connect } from 'react-redux';
import SiteForm from './site_form';
import { hostSite } from '../../actions/site_actions';

const msp = (state, {location}) => ({
    state,
    user: state.entities.users[state.session.id],
    lat: new URLSearchParams(location.search).get('lat'),
    lng: new URLSearchParams(location.search).get('lng')

});

const mdp = (dispatch) => {
    return {
        hostSite: (site) => dispatch(hostSite(site))
    };
};

export default connect(msp, mdp)(SiteForm);