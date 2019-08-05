import React, { Component } from 'react';

import SiteMap from './site_map';
import SiteIndex from '../sites/site_index';
import SiteFilterContainer from '../sites/site_filter_container';

class SiteSearch extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="spot_search_container">
                <SiteFilterContainer />

                <div className="spot_search_main">
                    <SiteIndex
                        sites={this.props.sites}
                        fetchSites={this.props.fetchSites}
                        filters={this.props.filters}
                        updateFilter={this.props.updateFilter}
                        clearAllFilters={this.props.clearAllFilters}
                    />

                    <SiteMap
                        sites={this.props.sites}
                        geoLocation={this.props.geoLocation}
                        filters={this.props.filters}
                        updateFilter={this.props.updateFilter}
                        receiveGeolocation={this.props.receiveGeolocation}
                    />
                </div>
            </div>
        )
    }
}

export default SiteSearch;