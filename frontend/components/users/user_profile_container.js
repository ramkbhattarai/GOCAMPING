import {connect} from 'react-redux';
import {fetchSites} from '../../actions/site_actions';
import {fetchAllBookings, deleteBooking} from '../../actions/booking_actions';
import UserProfile from './user.profile';
import { selectSites} from '../../reducers/selectors';

const msp = (state, ownProps) => {
    return (
        {
            bookings: state.entities.bookings,
            currentUser: state.entities.users[ownProps.match.params.userId],
            sites: selectSites(state)

        }
    )
}

const mdp = dispatch => {
    return(
        {
            fetchSites: () => dispatch(fetchSites()),
            fetchAllBookings: () => dispatch(fetchAllBookings()),
            deleteBooking: (id) => dispatch(deleteBooking(id))

        }
    )
}

export default connect(msp, mdp)(UserProfile);