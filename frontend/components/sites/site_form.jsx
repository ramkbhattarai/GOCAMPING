import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

class SiteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            host_id: props.user.id,
            currentStep: 1,
            title: '',
            body: '',
            cost: '',
            pet_allow: false,
            guest_num: '',
            lat: '',
            log: '',
            campfire: false,
            tent: false,
            spots: '',
            parking: false,
            toilet: false,
            shower_room: false,
            hiking: false,
            biking: false,
            wildlife: false,
            rafting: false,
            photoFile: [],
            photoUrl: [],
            address: '',
            errors: [],
            photos: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validate = this.validate.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    componentWillUnmount() {
        this.setState({ errors: [] })
    }

    handleFile(event) {
        const reader = new FileReader();
        const file = event.currentTarget.files[0];
        reader.onloadend = () => this.setState(
            { photoUrl: this.state.photoUrl.concat([reader.result]), photoFile: this.state.photoFile.concat([file]) }
        );
        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ photoUrl: [], photoFile: [] });
        }
    }

    handleChange(event) {
        const { name, value } = event.target;
        if (name === "address") {
            this.setState({
                [name]: value
            });
            geocodeByAddress(value)
                .then(results => getLatLng(results[0]))
                .then(({ lat, lng }) =>
                    this.setState({ lat: lat, log: lng })
                );
        } else {
            this.setState({
                [name]: value
            });
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        const { title, body, cost, photos, spots, guest_num, address } = this.state;

        const errors = this.validate(title, body, cost, photos, spots, guest_num, address);
        if (errors.length > 0) {
            this.setState({ errors });
            return;
        }

        const formData = new FormData();

        for (let i = 0; i < this.state.photos.length; i++) {
            formData.append('site[photos][]', this.state.photos[i]);
        }
        formData.append('site[title]', this.state.title);
        formData.append('site[host_id]', this.props.user.id);
        formData.append('site[body]', this.state.body);
        formData.append('site[cost]', this.state.cost);
        formData.append('site[pet_allow]', this.state.pet_allow);
        formData.append('site[guest_num]', this.state.guest_num);
        formData.append('site[lat]', this.state.lat);
        formData.append('site[log]', this.state.log);
        formData.append('site[campfire]', this.state.campfire);
        formData.append('site[tent]', this.state.tent);
        formData.append('site[spots]', this.state.spots);
        formData.append('site[parking]', this.state.parking);
        
        formData.append('site[toilet]', this.state.toilet);
        formData.append('site[shower_room]', this.state.shower_room);
        formData.append('site[hiking]', this.state.hiking);
        formData.append('site[biking]', this.state.biking);
        formData.append('site[wildlife]', this.state.wildlife);
        formData.append('site[rafting]', this.state.rafting);

        this.props.hostSite(formData)
            .then(res => {
                
                this.props.history.push(`/sites/${res.site.id}`)
            })
    }

    validate(title, body, cost, photos, spots, guest_num,  address) {
        const errors = [];

        if (title.length === 0) errors.push("Title can't be empty.");
        if (body.length === 0) errors.push("Description can't be blank.");
        if (cost < 1) errors.push("Cost should be over $0.");
        if (spots < 1) errors.push("Number of spots should be over 0.")
        if (guest_num < 1) errors.push("Group number should be over 0.");
        if (address.length === 0) errors.push("Address cannot be blank.")
        if (photos.length === 0) errors.push("Upload at least 1 photo.")

        return errors;
    }

    handleClick(event) {
        event.preventDefault();
        const currentName = event.target.name;
        this.setState({ [currentName]: !this.state[currentName] });
    }

    _next() {
        if (this.state.currentStep >= 2) {
            this.setState({
                currentStep: 3
            });
        } else {
            this.setState({
                currentStep: this.state.currentStep + 1
            });
        }
    }

    _prev() {
        if (this.state.currentStep <= 1) {
            this.setState({
                currentStep: 1
            });
        } else {
            this.setState({
                currentStep: this.state.currentStep - 1
            });
        }
    }

    previousButton() {
        if (this.state.currentStep !== 1) {
            return (
                <button
                    className="left_arrow"
                    type="button" onClick={this._prev.bind(this)}>
                    <i className="fas fa-angle-left"></i>
                </button>
            )
        } else {
            return (
                <button
                    className="null_arrow"
                    type="button">
                    <i className="fas fa-angle-left"></i>
                </button>
            )
        }
    }

    nextButton() {
        if (this.state.currentStep < 3) {
            return (
                <button
                    className="right_arrow"
                    type="button" onClick={this._next.bind(this)}>
                    <i className="fas fa-angle-right"></i>
                </button>
            )
        } else {
            return (
                <button
                    className="null_arrow"
                    type="button">
                    <i className="fas fa-angle-right"></i>
                </button>
            )
        }
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`errors-${i}`} className="master_form_error">
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        const { errors } = this.state;

        let preview = null;
        if (this.state.photoUrl.length > 0) {
            preview = this.state.photoUrl.map((photo, idx) => {
                return <img key={idx} src={photo} alt="" />
            })
        }

        let step;

        if (this.state.currentStep === 1) {
            step =
                <>
                    <div className="form-group">
                        <label className="form_group_title">Name Your Site</label>
                        <input
                            className="form-control"
                            id="title"
                            name="title"
                            type="text"
                            value={this.state.title}
                            onChange={this.handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form_group_title">Describe Your Site</label>
                        <textarea
                            className="form_control_description"
                            id="body"
                            name="body"
                            type="text"
                            value={this.state.body}
                            onChange={this.handleChange}
                            maxLength="500"
                            cols='20'
                            rows='10'
                            required
                        />
                    </div>
                </>
        } else if (this.state.currentStep === 2) {
            step =
                <>
                    <div className="form-group">
                        <label className="form_group_title">Daily Cost</label>
                        <input
                            className="form-control"
                            id="cost"
                            name="cost"
                            type="number"
                            value={this.state.cost}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form_group_title">Spots Available</label>
                        <input
                            className="form-control"
                            id="spots"
                            name="spots"
                            type="number"
                            value={this.state.spots}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="form_group_title">Max Group Number</label>
                        <input
                            className="form-control"
                            id="guest_num"
                            name="guest_num"
                            type="number"
                            value={this.state.guest_num}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
            
                    <div className="form-group">
                        <label className="form_group_title">Address</label>
                        <input
                            className="form-control"
                            id="address"
                            name="address"
                            type="text"
                            value={this.state.address}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                </>
        } else {
            step = <React.Fragment>
                <>
                    <div className="host_options_title">
                        Choose Camp Features!
                </div>
                    <div className="create_spot_form">
                        <div className="host_option_main">

                            <div className="form-group-options">
                                <input type="image" src="https://image.flaticon.com/icons/svg/71/71702.svg"
                                    className={this.state.pet_allow ? 'active_button' : 'host_spot_options'}
                                    name="pet_allow"
                                    onClick={this.handleClick}
                                />
                            </div>
                            <div className="form-group-options">
                                <input type="image" src="https://image.flaticon.com/icons/svg/1535/1535413.svg"
                                    className={this.state.campfire ? 'active_button' : 'host_spot_options'}
                                    name="campfire"
                                    onClick={this.handleClick}
                                />
                            </div>
                            <div className="form-group-options">
                                <input type="image" src="https://image.flaticon.com/icons/svg/1535/1535412.svg"
                                    className={this.state.tent ? 'active_button' : 'host_spot_options'}
                                    name="tent"
                                    onClick={this.handleClick}
                                />
                            </div>
                            <div className="form-group-options">
                                <input type="image" src="https://image.flaticon.com/icons/svg/818/818383.svg"
                                    className={this.state.parking ? 'active_button' : 'host_spot_options'}
                                    name="parking"
                                    onClick={this.handleClick}
                                />
                            </div>
                            <div className="form-group-options">
                                <input type="image" src="https://image.flaticon.com/icons/svg/93/93156.svg"
                                    className={this.state.toilet ? 'active_button' : 'host_spot_options'}
                                    name="toilet"
                                    onClick={this.handleClick}
                                />
                            </div>
                            <div className="form-group-options">
                                <input type="image" src="https://image.flaticon.com/icons/svg/1536/1536456.svg"
                                    className={this.state.shower_room ? 'active_button' : 'host_spot_options'}
                                    name="shower_room"
                                    onClick={this.handleClick}
                                />
                            </div>
                            <div className="form-group-options">
                                <input type="image" src="https://image.flaticon.com/icons/svg/71/71423.svg"
                                    className={this.state.hiking ? 'active_button' : 'host_spot_options'}
                                    name="hiking"
                                    onClick={this.handleClick}
                                />
                            </div>
                            <div className="form-group-options">
                                <input type="image" src="https://image.flaticon.com/icons/svg/565/565350.svg"
                                    className={this.state.biking ? 'active_button' : 'host_spot_options'}
                                    name="biking"
                                    onClick={this.handleClick}
                                />
                            </div>
                            <div className="form-group-options">
                                <input type="image" src="https://image.flaticon.com/icons/svg/38/38607.svg"
                                    className={this.state.rafting ? 'active_button' : 'host_spot_options'}
                                    name="rafting"
                                    onClick={this.handleClick}
                                />
                            </div>
                        </div>
                    </div>
                </>
                <input type="file" id="photo_upload" className="photo_upload" accept="image/*" onChange={(e) => this.setState({ photos: e.target.files })} multiple />
                <label className="photo_upload_button" htmlFor="photo_upload"><i className="fas fa-camera"></i><span>Upload</span></label>

                {preview}

                <div className="form_signup">
                    <div className="host_form_errors">
                        {errors.map(error => (
                            <p key={error}>&#10060; {error}</p>
                        ))}
                    </div>
                    <input type="submit" className="form_signup_button" value="Create Site" />
                </div>

                <div className="spot_error_message">{this.renderErrors()}</div>

            </React.Fragment>
        }

        return (
            <div className="spot_form_container">
                <div className="spot_form_nav">
                    <div className="form_nav_section">
                        <div className="arrow_container">
                            {this.previousButton()}
                            {this.nextButton()}
                        </div>
                    </div>
                    <div className="form_nav_empty"></div>
                </div>

                <div className="form_container">
                    <div className="spot_form_main">
                        <React.Fragment>
                            <form className="form" onSubmit={this.handleSubmit} >
                                {step}
                            </form>
                        </React.Fragment>
                    </div>
                    <div className="spot_form_message">
                        <div className="host_message_header">
                            <img className="host_photo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQsH02JS0zr2TEGS30UnXiERIeTak5cVStuvt6jm5hix9VDcymg" alt="" />
                            <div className="host_message_details">
                                <p className="host_message_name">Meet Ram Krishna Bhattarai</p>
                                <p>Host Team</p>
                            </div>
                        </div>
                        <div className="host_message">
                            <p>“My team and I are so excited you've chosen us to be your partner in sharing your land with our community
                                of GoCamping across the country.</p>
                            <p>We want to help you achieve your hosting goals.</p>
                    
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.sites,
    };
};

export default connect(mapStateToProps, null)(withRouter(SiteForm));
