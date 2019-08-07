import * as BookingApiUtil from '../util/booking_api_util';

export const RECEIVE_ALL_BOOKING = "RECEIVE_ALL_BOOKING";
export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const CREATE_BOOKING = "CREATE_BOOKING";
export const REMOVE_BOOKING = "REMOVE_BOOKING";
export const RECEIVE_BOOKING_ERRORS = "RECEIVE_BOOKING_ERRORS";

export const receiveBookings = (bookings) => {
    return(
        {
            type: RECEIVE_ALL_BOOKING,
            bookings
        }
    )
}

export const receiveBooking = (booking) => {
    return (
        {
            type: RECEIVE_BOOKING,
            booking
        }
    )
}

export const createBooking = booking => {
    return(
        {
            type: CREATE_BOOKING,
            booking
        }
    )
}

export const removeBooking = booking => {
    
    return(
        {
            type: REMOVE_BOOKING,   
            bookingId: booking.id
        }
    )
}

export const receiveBookingErrors = errors => {
   
    return(
        {
            type: RECEIVE_BOOKING_ERRORS,
            errors
        }
    )
}

export const fetchAllBookings = () => {
    return dispatch => {
        return BookingApiUtil.fetchAllBookings()
        .then(
            bookings => {
                return dispatch(receiveBookings(bookings))
            }
        )
    }
}

// export const fectchBooking = (id) => {
//     return dispatch => {
//         return BookingApiUtil.fetchBooking(id)
//         .then(
//             booking => {
//                 return dispatch(receiveBooking(booking))
//             }
//         )
//     }
// }

export const makeBooking = booking =>{
    return dispatch => {
        return BookingApiUtil.createBooking(booking)
        .then(
            booking => {
                return dispatch(receiveBooking(booking))
            }, errors => {
               
               return dispatch(receiveBookingErrors(errors.responseJSON))
            }
            
        )
    }
}

export const deleteBooking = id => {
    return dispatch => {
        return BookingApiUtil.deleteBooking(id)
        .then(
            booking => {
                return dispatch(removeBooking(booking.id))
            }
        )
    }
}