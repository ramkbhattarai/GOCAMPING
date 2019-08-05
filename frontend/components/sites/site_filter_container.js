import { connect } from 'react-redux';
import SiteFilter from './site_filter';
import { fetchSites } from '../../actions/site_actions';
import {
    receiveSingleFilter,
    removeSingleFilter,
    clearAllFilters,
    receivePricingFilter,
    removePricingFilter,
    receiveGroupFilter,
    removeGroupFilter
} from '../../actions/filter_actions';


const msp = state => ({
    filters: state.ui.filters,
})

const mdp = dispatch => ({
    fetchSites: () => dispatch(fetchSites()),
    receiveSingleFilter: filter => dispatch(receiveSingleFilter(filter)),
    removeSingleFilter: filter => dispatch(removeSingleFilter(filter)),
    receivePricingFilter: amount => dispatch(receivePricingFilter(amount)),
    removePricingFilter: amount => dispatch(removePricingFilter(amount)),
    receiveGroupFilter: amount => dispatch(receiveGroupFilter(amount)),
    removeGroupFilter: amount => dispatch(removeGroupFilter(amount)),
    clearAllFilters: () => dispatch(clearAllFilters()),
})

export default connect(msp, mdp)(SiteFilter)