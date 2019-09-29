import { connect } from 'react-redux';
import SiteForm from './site_form';
import { hostSite } from '../../actions/site_actions';

const msp = (state) => {
// debugger
    return{

        state,
        user: state.entities.users[state.session.id],
    }
   

};

const mdp = (dispatch) => {
    return {
        hostSite: (site) => dispatch(hostSite(site))
    };
};

export default connect(msp, mdp)(SiteForm);