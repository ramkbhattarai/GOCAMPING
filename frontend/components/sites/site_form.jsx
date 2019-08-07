import React, { Component } from 'react';

import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

class SiteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            host_id: props.user.id,
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
            wifi: false,
            address: ""
            
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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


    update(field) {

        return e => {

            this.setState({
                [field]: e.currentTarget.value
            })
        };
    }

    handleInputChange(e){
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name] : value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.hostSite(formData)
            .then((response) => {
                return (
                    this.props.history.push(`/spots/${Object.keys(response.spot)[0]}`)
                )
            }) 
    }
    
    render(){
        return(
            <div className="site_form_container">
            <form className="site_form"  onSubmit={this.handleSubmit}>
                <div className="site_title">
                
                    <input type="text" value={this.state.title}
                    onChange={this.handleChange}
                    placeholder='Title'
                    />
                </div>
                <div className="site_description">
                    Write Short Description For Your Site:
                    <input type="text" value={this.state.body}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="site_cost_num_spots">

                <div className="site_cost">
                    Enter Cost For Your Site pernight:
                    <input type="number" value={this.state.cost}
                    onChange={this.handleInputChange}
                    />
                </div>
                <div className="site_guest_num">
                    Enter Maxium Number of Guest For Your Site pernight:
                    <input type="number" value={this.state.guest_num}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="site_spots">
                    Enter Number of Spots For Your Site pernight:
                    <input type="number" value={this.state.spots}
                        onChange={this.handleInputChange}
                    />
                </div>
                </div>
                <div className="site_address">
                    Enter Address of Your Site:
                    <input type="text" value={this.state.address}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="site_checkboxes">

                    <div className="site_pet">
                    Pets Allow?:
                    <input type="checkbox"
                        name='pet_allow'
                        checked={this.state.pet_allow}
                        onChange={this.handleInputChange}
                    />
                </div>
                    <div className="site_campfire">
                    Campfire?:
                    <input type="checkbox"
                        name='pet_allow'
                        checked={this.state.campfire}
                        onChange={this.handleInputChange}
                    />
                </div>
                    <div className="site_tent">
                    Tent?:
                    <input type="checkbox"
                        name='pet_allow'
                        checked={this.state.tent}
                        onChange={this.handleInputChange}
                    />
                </div>
                    <div className="site_parking">
                    Parking?:
                    <input type="checkbox"
                        name='pet_allow'
                        checked={this.state.parking}
                        onChange={this.handleInputChange}
                    />
                </div>
                    <div className="site_toilet">
                    Toilet?:
                    <input type="checkbox"
                        name='pet_allow'
                        checked={this.state.toilet}
                        onChange={this.handleInputChange}
                    />
                </div>
                    <div className="site_shower_room">
                    Shower Room?:
                    <input type="checkbox"
                        name='pet_allow'
                        checked={this.state.shower_room}
                        onChange={this.handleInputChange}
                    />
                </div>
                    <div className="site_wildlife">
                    Wildlife?:
                    <input type="checkbox"
                        name='pet_allow'
                        checked={this.state.wildlife}
                        onChange={this.handleInputChange}
                    />
                </div>
                    <div className="site_hiking">
                    Hiking?:
                    <input type="checkbox"
                        name='pet_allow'
                        checked={this.state.hiking}
                        onChange={this.handleInputChange}
                    />
                </div>
                    <div className="site_biking">
                    Biking?:
                    <input type="checkbox"
                        name='pet_allow'
                        checked={this.state.biking}
                        onChange={this.handleInputChange}
                    />
                </div>
                    <div className="site_rafting">
                    Rafting?:
                    <input type="checkbox"
                        name='pet_allow'
                        checked={this.state.rafting}
                        onChange={this.handleInputChange}
                    />
                </div>
                    <div className="site_wifi">
                    Wifi?:
                    <input type="checkbox"
                        name='pet_allow'
                        checked={this.state.wifi}
                        onChange={this.handleInputChange}
                    />
                </div>
                </div>
                <input className="site_submit_button" type="submit" value="Submit"/>
            </form>
            </div>
        )
    }
}

export default SiteForm;