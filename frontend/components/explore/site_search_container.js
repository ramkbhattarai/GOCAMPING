import { connect } from 'react-redux';
import SiteSearch from './site_search';
import { fetchSites } from '../../actions/site_actions';
import { updateFilter, receiveGeolocation } from '../../actions/location_filter_actions';
import { clearAllFilters } from '../../actions/filter_actions';

const msp = (state) => {
   
    return(
        {

            sites: Object.values(state.entities.sites),
            geoLocation: state.ui.geoLocation["address"],
            filters: state.ui.filters
        }
    )
};

const mdp = (dispatch) => ({
    fetchSites: () => dispatch(fetchSites()),
    receiveGeolocation: (loc) => dispatch(receiveGeolocation(loc)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    clearAllFilters: () => dispatch(clearAllFilters())
});

export default connect(msp, mdp)(SiteSearch);