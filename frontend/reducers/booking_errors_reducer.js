import { RECEIVE_BOOKING_ERRORS} from '../actions/booking_actions';


export default (state = [], action) => {
    Object.freeze(state);
  
    if (action.type === RECEIVE_BOOKING_ERRORS) {
       
        return  action.errors;
    } else {
        return state;
    }
}