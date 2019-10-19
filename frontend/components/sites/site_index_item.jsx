import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

class SiteIndexItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    handleClick(e) {
        
        this.props.push(`/sites/${this.props.site.id}`);
    }
 
    handleMouseOver(e){
        // reducer
        // FETCH_MARKER
        // return state[id]


        // fetch the mark from reducer
        //const marker = fetchMarker(this.props.site.id);
        google.maps.event.trigger(markers[this.props.site.id], 'mouseover')

    }

    handleMouseOut(e){
        google.maps.event.trigger(markers[this.props.site.id], 'mouseout')
    }


    render() {

        
       
        const defaultPhoto = ['https://www.welcomenepal.com/uploads/homeslider/far-west-nepal-the-great-himalaya-trails.jpeg'];

        if (!this.props.site.photoUrls) {
            
            this.props.site.photoUrls = defaultPhoto;
        }
            
        return (
            <div className="spot_index_item" id={`site-${this.props.site.id}`} onClick={this.handleClick} onMouseOver={ this.handleMouseOver} onMouseOut = {this.handleMouseOut}>
                <Link className="spot_index_item_link" to={`/sites/${this.props.site.id}`}>
                    <img className="spot_index_photo" src={this.props.site.photoUrls[0]} alt="" />
                    <div className="spot_details">
                        <div className="spot_details_title">
                            {this.props.site.title}
                        </div>
                        <div className="spot_details_body">
                            {this.props.site.body}
                        </div>
                        <div className="spot_details_price">
                            <div className="spot_details_reviews"> reviews</div>
                            <div>${this.props.site.cost}/night</div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
};

export default SiteIndexItem;