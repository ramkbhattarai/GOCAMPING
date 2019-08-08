import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, receiveErrors, login } from '../../actions/sessions_actions';
import SessionForm from './session_form';
import {openModal, closeModal} from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => {
   
    return {
        
        errors: errors.session,
        formType: 'signup',
        navLink: <Link to="/login">Log In</Link>,
        demoUser: {
            email: 'yasu@gmail.com',
            fname: 'yasodha',
            lname: 'bhattarai',
            password: 'password',
            zip_code: 1234
        }
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        login: user => dispatch(login(user)),
        otherForm: (
            <button className='session-other' onClick={() => dispatch(openModal('login'))}>
                LOGIN
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(receiveErrors([]))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
