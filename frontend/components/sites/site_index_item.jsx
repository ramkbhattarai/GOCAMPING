import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SiteIndexItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.push(`/sites/${this.props.site.id}`);
    }

    render() {
        const defaultPhoto = ['https://www.welcomenepal.com/uploads/homeslider/far-west-nepal-the-great-himalaya-trails.jpeg'];

        if (!this.props.site.photos) {
            debugger
            this.props.site.photos = defaultPhoto;
        }
            
        return (
            <div className="spot_index_item" id={`site-${this.props.site.id}`} onClick={this.handleClick}>
                <Link className="spot_index_item_link" to={`/sites/${this.props.site.id}`}>
                    <img className="spot_index_photo" src={this.props.site.photos[0].url} alt="" />
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