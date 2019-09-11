import React from 'react';
import { Link } from 'react-router-dom';
import {geocodeByAddress} from 'react-places-autocomplete';
import { format } from 'date-fns';

class UserProfile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            city: '',
            state: '',
            zip_code: this.props.currentUser.zip_code
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchAllBookings();
        this.props.fetchSites();
        this.getAddressInfoByZip(this.state.zip_code.toString());
    }

    getAddressInfoByZip(zip) {
        geocodeByAddress(zip)
            .then(results => {
                return (
                    this.setState({ city: results[0].address_components[1].long_name, state: results[0].address_components[2].short_name })
                )
            })
    }



    render(){

        let startDate = format(this.props.currentUser.created_at, 'MMMM YYYY');
        let bookingArr = Object.values(this.props.bookings);
        bookingArr.sort(function compare(b, a) {
            var dateA = new Date(a.check_in);
            var dateB = new Date(b.check_in);
            return dateA - dateB;
        });
            return(
              
                <div className="user_profile_container">
                    <div className="user_booking_spot">
                        <aside className="user_profile_sidebar">
                            <div className="bio_panel">
                                <h4 id="bio_panel_name">{this.props.currentUser.fname}</h4>
                                <br />
                                <div className="bio_sections">
                                    <span id="heart_icon" className="fas fa-heart"></span>
                                    <nobr>Our Partner since {startDate}</nobr>
                                </div>
                                <br />
                                <div className="bio_sections">
                                    <span id="marker_icon" className="fas fa-map-pin"></span>
                                    <nobr>From {this.state.city + ', ' + this.state.state}</nobr>
                                </div>
                            </div>
                            <div className="panel_body">
                                <h3 id="panel_body_header">Trusted Member</h3>
                                <br />
                                <span id="email_icon" className="far fa-check-circle"></span>
                                Email address
                                <br />
                                <span id="facebook_icon" className="far fa-check-circle"></span>
                                Facebook
                            </div>
                        </aside>

                        <ul className="booked_spots_list">
                            {bookingArr.map(booking => {
                                let checkIn = format(booking.check_in, 'ddd, MMM Do');
                                let checkOut = format(booking.check_out, 'ddd, MMM Do');

                                return (
                                    <li className="booked_spot_items" key={booking.id}>
                                        <Link className="user_booking_title" to={`/sites/${booking.site.id}`}>{booking.site.title}</Link>
                                        <div className="user_booking_dates">
                                            <img className="booking_img" src={booking.site.image_url} alt="" />
                                            <div className="user_booking_details">
                                                <p><nobr className="user_booking_subheader">Check In:</nobr> {checkIn}</p>
                                                <p><nobr className="user_booking_subheader">Check Out:</nobr> {checkOut}</p>
                                                <p><nobr className="user_booking_subheader">Number of Guests:</nobr> {booking.guest_num}</p>
                                                <p><nobr className="user_booking_subheader">Total Price:</nobr> ${booking.site.cost}</p>
                                            </div>
                                        </div>
                                        <button className="booking_delete_button" onClick={() => this.props.deleteBooking(booking.id)}>Delete</button>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
        
            )           
    }
}

export default UserProfile;