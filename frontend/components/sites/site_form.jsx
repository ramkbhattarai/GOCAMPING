import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

class SiteForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: "",
            body: "",
            host_id: "",
            cost: "",
            lat: "",
            log: "",
            campfire: false,
            wifi: false,
            toilet: false,
            shower_room: false,
            guest_num: "",
            tent: false,
            parking: false,
            biking: false,
            pet_allow: false,
            hiking: false, 
            wildlife: false, 
            rafting: false,
            photos: [],
            errors: []
        }
    }

    render(){
        
    }
    
}

const msp =state => {
    return(
        {
            errors: state.errors.sites
        }
    )
}

export default withRouter(connect(msp)(SiteForm));