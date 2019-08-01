import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, receiveErrors } from '../../actions/sessions_actions';
import SessionForm from './session_form';
import {openModal, closeModal} from '../../actions/modal_actions';

const msp = ({ errors }) => {
    return {
        errors: errors,
        formType: 'login',
        navLink: <Link to="/signup">Sign Up</Link>,
        demoUser: {
            email: 'yasu@gmail.com',
            fname: 'yasodha',
            lname: 'bhattarai',
            password: 'password',
            zip_code: 1234
        }
    };
};

const mdp = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        login: user => dispatch(login(user)),
        otherForm: (
            <button className='session-other' onClick={() => dispatch(openModal('signup'))}>
                SIGNUP
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(receiveErrors([]))
    };
};

export default connect(msp, mdp)(SessionForm);
