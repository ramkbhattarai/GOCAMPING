import {connect} from 'react-redux';
import {fetchAllBookings, makeBooking, deleteBooking} from '../../actions/booking_actions';
import {fetchSite} from '../../actions/site_actions';
import {openModal} from '../../actions/modal_actions';
import Booking from './booking';

const msp = (state, ownProps) => {
    const site = state.entities.sites[ownProps.siteId] || {};
 
    return(
        {
            bookings: state.entities.bookings,
            currentUserId: state.session.id,
            sites: state.entities.sites,
            site,
            errors: state.errors.bookings || []
        }
    )
}

const mdp = dispatch => {
    return(
        {
            makeBooking: booking => dispatch(makeBooking(booking)),
            deleteBooking: id => dispatch(deleteBooking(id)),
            openModal: modalType => dispatch(openModal(modalType)),
            fetchSite: id => dispatch(fetchSite(id)),
            fetchAllBookings: () => dispatch(fetchAllBookings())
        }
    )
}

export default connect(msp, mdp)(Booking);