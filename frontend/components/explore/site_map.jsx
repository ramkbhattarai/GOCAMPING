import React, { Component } from 'react';
import MarkerManager from '../../util/marker_manager';
import { fetchSites } from '../../actions/site_actions';
import applyFilters from '../../util/filter_util.js';

class SiteMap extends Component {
    constructor(props) {
        super(props);

        this.geoCoder = new google.maps.Geocoder();
        this.centerMapOnSearch = this.centerMapOnSearch.bind(this);
        this.centerMap = this.centerMap.bind(this);
        this.registerListeners = this.registerListeners.bind(this);
       
    }

    componentDidMount() {
        fetchSites();
        let mapCenter = { lat: 28.530659, lng: 83.878058 };
        const mapOptions = {
            center: mapCenter,
            zoom: 6
        };
        let geoLocation = this.props.geoLocation;
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers(this.props.sites);
        this.registerListeners();
    }

    registerListeners() {
        google.maps.event.addListener(this.map, 'idle', () => {
            const { north, south, east, west } = this.map.getBounds().toJSON();
            let bounds = {
                northEast: { lat: north, log: east },
                southWest: { lat: south, log: west }
            };

            this.props.updateFilter('location', bounds);
        });
    }

    
     

    centerMapOnSearch() {
        this.geoCoder.geocode({ 'address': this.props.geoLocation }, (results, status) => {
            if (status === "OK") {
                if (results[0]) {
                    this.map.setZoom(12);
                    let mapCenter = results[0].geometry.location;
                    this.map.setCenter(mapCenter);
                    const newBounds = this.map.getBounds();
                    this.map.fitBounds(newBounds);
                    this.props.receiveGeolocation(mapCenter);
                } else {
                    return { lat: 28.530659, lng: 83.878058 };
                }
            }
        });
    }

    centerMap(callBack) {
        this.geoCoder.geocode({ 'address': this.props.geoLocation }, (results, status) => {
            if (status === "OK") {
                if (results[0]) {
                    let lat = results[0].geometry.location.lat();
                    let lng = results[0].geometry.location.lng();
                    let mapCenter = { lat, lng }
                    callBack(mapCenter)
                } else {
                    mapCenter = { lat: 28.530659, lng: 83.878058 };
                    callBack(mapCenter)
                }
            }
        });
    }

    componentDidUpdate() {
        const filteredSites = applyFilters(this.props.filters, this.props.sites)
        this.MarkerManager.updateMarkers(filteredSites);
        if (this.props.geoLocation.length > 0) this.centerMapOnSearch();
    }

    render() {
        return (
            <div id='map-container'>
                <div className="map" ref={map => this.mapNode = map}>
                </div>
            </div>
        )
    }
}

export default SiteMap;