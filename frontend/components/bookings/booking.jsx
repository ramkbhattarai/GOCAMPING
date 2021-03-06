import React, { Component } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { formatDate, parseDate } from 'react-day-picker/moment';
import { withRouter } from 'react-router-dom';
import { format, differenceInDays } from 'date-fns';

class Booking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guest_num: 1,
            
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    componentWillMount(){
        this.props.clearErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
       
        if (!this.props.currentUserId) {
            this.props.openModal('login')
        } else {
            let checkInDate = this.state.check_in;
            let checkOutDate = this.state.check_out;

            const num_days = differenceInDays(checkOutDate, checkInDate);

            const booking = Object.assign({}, this.state);
            booking.guest_id = this.props.currentUserId;
            booking.site_id = this.props.match.params.siteId;
            booking.guest_num = this.state.guest_num;
            //booking.price *= num_days

            this.props.clearErrors();

            this.props.makeBooking(booking)
                .then(() => {
                    if (!this.props.errors.length){
                        this.props.fetchAllBookings()
                        .then(() => this.props.history.push(`/users/${this.props.currentUserId}`));
                    }
                })
                
         
        }
    }

    handleDateChange(type) {
        return day => {
            let currentDay = format(day, "YYYY-MM-DD");

            this.setState({ [type]: currentDay });
        };
    }

    nextDay(day) {
        const nextDay = new Date(day)
        nextDay.setDate(day.getDate() + 2)
        return nextDay
    }

    handleNumGuests(change) {
        return e => {
            if (change === '+' && (this.state.guest_num + 1 <= this.props.site.guest_num)) {
                this.setState({ guest_num: (this.state.guest_num += 1) });
            } else if (change === '-' && (this.state.guest_num - 1 >= 1)) {
                this.setState({ guest_num: (this.state.guest_num -= 1) });
            }
        }
    }

    renderErrors() {
       
        return (
            <ul className="booking-errors">
                {this.props.errors.map((error, idx) => (
                    <li key={`error-${idx}`} className="bookings_error">
                         {error}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        const { site } = this.props;
        const today = new Date();
        const checkIn = this.state.check_in ? this.nextDay(new Date(this.state.check_in)) : this.nextDay(today)
        
        return (
            <div className="widget_container">
                <form onSubmit={this.handleSubmit}>
                    <div className="booking_widget">
                        <div className="booking_banner">
                            <h2>${site.cost}</h2>
                            <p id="widget_per_night">per night</p>
                        </div>
                        <div className="booking_well">
                            <div className="well_dates_guests">
                                <div className="booking_checkin">
                                    <div className="label">Check in</div>
                                    <DayPickerInput
                                        formatDate={formatDate}
                                        parseDate={parseDate}
                                        onDayChange={this.handleDateChange('check_in')}
                                        placeholder="Select Date"
                                        dayPickerProps={{
                                            disabledDays: {
                                                before: today
                                            }
                                        }}
                                    />
                                </div>
                                <div className="booking_checkout">
                                    <div className="label">Check out</div>

                                    <DayPickerInput
                                        formatDate={formatDate}
                                        parseDate={parseDate}
                                        onDayChange={this.handleDateChange('check_out')}
                                        placeholder="Select Date"
                                        dayPickerProps={{
                                            month: checkIn,
                                            disabledDays: {
                                                before: checkIn
                                            }
                                        }}
                                    />
                                </div>

                                <div className="booking_guests">
                                    <div className="label">Guests</div>
                                    <div className="widget_guests">
                                        <a onClick={this.handleNumGuests('-')}>-</a>
                                        <p className="booking_num_guests">{this.state.guest_num}</p>
                                        <a onClick={this.handleNumGuests('+')}>+</a>
                                    </div>
                                </div>
                            </div>

                            <div className="booking_error_message">{this.renderErrors()}</div>

                            <div className="booking_submit">
                                <input className="widget_button" type="submit" value="Please book here" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(Booking)
