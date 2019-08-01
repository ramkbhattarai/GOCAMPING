import RECEIVE_SITE_ERRORS from '../actions/site_actions';

export default (state = [], action) => {
    Object.freeze(state);
    if (action.type === RECEIVE_SITE_ERRORS){
        return action.errors ;
    }else{
        return state;
    }
}