import React from 'react';
import SiteListItems from './sites_list_items';

class SiteListShow extends React.Component{

    componentDidMount(){
        this.props.fetchSites();
    }

    render(){
        //debugger
        let items = this.props.sites.map(site => {
            return < SiteListItems key={site.id} site={site} className="site-list-items"/>
        })
        return(
            <div className="site-lists-show-page">
                {items}
            </div>
        )
    }
    
}

export default SiteListShow;