import {connect} from 'react-redux';
import React from 'react';
import SiteListShow from './sites_list_show';
import {fetchSites} from '../../actions/site_actions';

const msp = state => {
    //debugger
    return (
        {
           sites: Object.values(state.entities.sites)
        }
    )
}

const mdp = dispatch => {
    return(
        {
            fetchSites: () => dispatch(fetchSites()),
            //createSite: site => dispatch(createSite(site))
        }
    )
}

export default connect(msp, mdp)(SiteListShow);