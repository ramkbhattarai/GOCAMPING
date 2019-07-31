import { connect } from 'react-redux';
import SplashForm from './splash_form';
import React from 'react';
import { login } from '../../actions/sessions_actions';

const msp = state => {
    return(
        {
                currentUserId: state.session.id
        }
    )
}

const mdp = dispatch => {
    return (
        {
            login: user => dispatch(login(user))
        }
    )
}

export default connect(msp, mdp)(SplashForm);