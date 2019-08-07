import { RECEIVE_ALL_BOOKING, RECEIVE_BOOKING, CREATE_BOOKING, REMOVE_BOOKING} from '../actions/booking_actions';
import merge from 'lodash/merge';

const bookingsReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_ALL_BOOKING:
            return merge({},state,action.bookings)
            case RECEIVE_BOOKING:
                return merge({},state, {[action.booking.id]: action.booking})
                case CREATE_BOOKING:
                    return merge({},state,{booking: action.booking})
                    case REMOVE_BOOKING:
                        let a = merge({}, state);
                        delete a[action.bookingId];
                        return a;
                        return
                        default:
                            return state;
    }
}

export default bookingsReducer;