import {connect} from 'react-redux';
import React from 'react';
import Site from './site';
import {fetchSite, deleteSite} from '../../actions/site_actions';
import {openModal} from '../../actions/modal_actions';

const msp = (state, ownProps) => {
    const site = state.entities.sites[ownProps.match.params.siteId] || {};
    return (
        {
           site,
           currentUserId: state.session.id, 
           host: state.entities.users[site.host_id] || { fname: "", lname: ""}
        }
    )
}

const mdp = dispatch => {
    return(
        {
            fetchSite: (id) => dispatch(fetchSite(id)),
            deleteSite: id => dispatch(deleteSite(id)),
            openModal: modal => dispatch(openModal(modal))
        }
    )
}

export default connect(msp, mdp)(Site);