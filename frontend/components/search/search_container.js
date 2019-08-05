import { connect } from 'react-redux';
import Search from './search';
import { receiveGeolocation } from '../../actions/location_filter_actions'

const msp = state => ({
    sites: state.entities.sites,
    filters: state.ui.filters
});

const mdp = dispatch => ({
    fetchSite: (id) => dispatch(fetchSite(id)),
    fetchSites: () => dispatch(fetchSites()),
    receiveGeolocation: (loc) => dispatch(receiveGeolocation(loc))
});

export default connect(msp, mdp)(Search);