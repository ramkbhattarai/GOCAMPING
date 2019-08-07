import { connect } from 'react-redux';
import { logout, login } from '../../actions/sessions_actions';
import Greeting from './greeting';
import { openModal } from '../../actions/modal_actions';
import {withRouter} from 'react-router';

const msp = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id],
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
   
    return (
        {
        
            logout: () => dispatch(logout()),
            login: (user) => dispatch(login(user)),
            openModal: modal => dispatch(openModal(modal))
        }
    )
};

export default withRouter(connect(msp,mdp)(Greeting));