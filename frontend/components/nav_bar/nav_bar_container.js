import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/sessions_actions';

const msp = (state) => ({
    currentUser: state.entities.users[state.session.id]
});

const mdp = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default connect(msp, mdp)(NavBar);