import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import applyFilters from '../../util/filter_util';
import SiteIndexItem from './site_index_item.jsx';

class SiteIndex extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        }
        
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchSites();
    }

    render() {
      
        const { sites, filters } = this.props;
        const filteredSites = applyFilters(filters, sites);
        const siteItems = filteredSites.map((site) => (
            <SiteIndexItem
                push={this.props.history.push}
                site={site}
                key={site.id}
                user={this.props.user}
            />
        ));
        if (filteredSites.length === 0) {
            return (
                <div className="spot_index">
                    <div className='spot_index_empty'>
                        <h2> No sites match your current search. </h2>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="spot_index">
                    <ul>

                    {siteItems}
                    </ul>
                </div>
            )
        }
    }
}



export default withRouter(SiteIndex);