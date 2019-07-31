import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { login, logout, signup } from './actions/sessions_actions';

document.addEventListener("DOMContentLoaded", () => {
    let preloadedState = undefined;
    let store;
   
    if (window.currentUser) {
        preloadedState = {
            session: {
                id: window.currentUser.id
            },
            entities: {
                users: {[window.currentUser.id]: window.currentUser}
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    }else{
        store = configureStore()
    }

    //testing 
    window.store = store;
    window.getState = store.getState;
    window.dispatch  = store.dispatch;
    window.login = login;
    window.logout = logout;
    window.signup = signup;
    // testing
    
    ReactDOM.render(
        <Root store={store}/>,
        document.getElementById('root')
    );
})