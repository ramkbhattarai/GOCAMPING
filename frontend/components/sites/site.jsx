import React from 'react';

import { withRouter } from 'react-router-dom';

class Site extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        //window.scrollTo(0, 0);
        this.props.fetchSite(this.props.match.params.siteId);
    }

    handleDelete(e) {
        e.preventDefault();

        this.props.deleteSite(this.props.match.params.siteId)
        
    }

    handleClick(e) {
        e.preventDefault();

        if (!this.props.currentUserId) {
            this.props.openModal('login')
        } else {
            this.props.history.push(`/sites/${this.props.site.id}/review/new`);
        }
    }


    render() {
        const { site, host } = this.props;
    
        if (Object.values(site).length === 0) {
            return (
                null
            )
        } else {
            return (
                <>
                    <main className="spot_main_section">
                        <div className="photo_slider">
                            {/* <PhotoSlideshow site={site} /> */}
                        </div>

                        <div className="spot_page">
                            <div className="spot_div_main">
                                <div className="spot_div">
                                    <h1 className="spot_title">{site.title}</h1>
                                    {
                                        site.host_id === this.props.currentUserId ?
                                            <button className="delete_spot_button"
                                                onClick={this.handleDelete.bind(this)}>Delete Site</button>
                                            :
                                            null
                                    }
                                </div>

                                <div className="spot_div">
                                    <div className="hosted_container">
                                        <nobr className="hosted_by_title">Hosted By</nobr><br />
                                        <nobr className="host_name">{host.fname + " " + host.lname[0] + "."}</nobr>
                                    </div>
                                    <p className="spot_body">{site.body}</p>
                                </div>

                                <div className="spot_div" id="spot_details">
                                    <div className="spot_detail_header">
                                        Details
                                     </div>
                                    <div id="spot_details_subsection">
                                        <div className="spot_div_details">
                                            <ul>
                                                <li className="test">
                                                    <nobr className="bold">Max Capacity: </nobr>
                                                    {site.guest_num}
                                                </li><p></p>
                                                <li>
                                                    <nobr className="bold">Daily Cost: </nobr>
                                                    ${site.cost}
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="spot_div_details">
                                            <ul>
                                                <li>
                                                    <nobr className="bold">Check In After: </nobr>
                                                    10:00 Am
                                                </li><p></p>
                                                <li>
                                                    <nobr className="bold">Check Out Before: </nobr>
                                                    5:00 Pm
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="spot_section">
                                    <div className="spot_div_info">
                                        <div>
                                            <p className="spot_section_title">
                                                Campsite area
                                            </p>

                                            <ul className="spot_subsection">
                                                <li>
                                                    {
                                                        site.tent ?
                                                            <span>
                                                                <img src="https://image.flaticon.com/icons/svg/1535/1535412.svg" alt="" />
                                                                <p> Tent provided </p>
                                                            </span>
                                                            :
                                                            <span>
                                                                <img src="https://image.flaticon.com/icons/svg/678/678406.svg" alt="" />
                                                                <p> Bring your own tents </p>
                                                            </span>
                                                    }
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src="https://image.flaticon.com/icons/svg/1535/1535442.svg" alt="" />
                                                        <p> {site.spots} spots </p>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src="https://image.flaticon.com/icons/svg/58/58038.svg" alt="" />
                                                        <p> Up to {site.guest_num} guests per spot </p>
                                                    </span>
                                                </li>
                                                <li>
                                                    {
                                                        site.parking ?
                                                            <span>
                                                                <img src="https://image.flaticon.com/icons/svg/818/818383.svg" alt="" />
                                                                <p> Parking</p>
                                                            </span>
                                                            :
                                                            <span>
                                                                <img src="https://image.flaticon.com/icons/svg/652/652339.svg" alt="" />
                                                                <p> No parking</p>
                                                            </span>
                                                    }
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="spot_div_info">
                                        <div>
                                            <p className="spot_section_title">
                                                Essentials
                                            </p>
                                            <ul className="spot_subsection">
                                                <li>
                                                    {
                                                        site.campfire ?
                                                            <span>
                                                                <img src="https://image.flaticon.com/icons/svg/1535/1535413.svg" alt="" />
                                                                <p> Campfires allowed</p>
                                                            </span>
                                                            :
                                                            <span>
                                                                <img src="https://image.flaticon.com/icons/svg/678/678405.svg" alt="" />
                                                                <p> No campfires allowed</p>
                                                            </span>
                                                    }
                                                </li>
                                                <li>
                                                    {
                                                        site.pets_allow ?
                                                            <span>
                                                                <img src="https://image.flaticon.com/icons/svg/71/71702.svg" alt="" />
                                                                <p> Pets allowed</p>
                                                            </span>
                                                            :
                                                            <span>
                                                                <img src="https://image.flaticon.com/icons/svg/1596/1596681.svg" alt="" />
                                                                <p> No pets allowed</p>
                                                            </span>
                                                    }
                                                </li>
                                                <li>
                                                    {
                                                        site.toilet ?
                                                            <span>
                                                                <img src="https://image.flaticon.com/icons/svg/93/93156.svg" alt="" />
                                                                <p> Toilet available</p>
                                                            </span>
                                                            :
                                                            <span>
                                                                <img src="https://image.flaticon.com/icons/svg/75/75263.svg" alt="" />
                                                                <p> No toilet</p>
                                                            </span>
                                                    }
                                                </li>
                                                <li>
                                                    {
                                                        site.shower_room ?
                                                            <span>
                                                                <img src="https://image.flaticon.com/icons/svg/1536/1536456.svg" alt="" />
                                                                <p> Showers</p>
                                                            </span>
                                                            :
                                                            <span>
                                                                <img src="https://image.flaticon.com/icons/svg/274/274595.svg" alt="" />
                                                                <p> No Showers</p>
                                                            </span>
                                                    }
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="spot_div_info">
                                        <div>
                                            <p className="spot_section_title">
                                                Activities
                    </p>
                                            <ul className="spot_subsection">
                                                <li>
                                                    {
                                                        site.hiking ?
                                                            <span>
                                                                <img src="https://image.flaticon.com/icons/svg/71/71423.svg" alt="" />
                                                                <p> Hiking Trails</p>
                                                            </span>
                                                            :
                                                            null
                                                    }
                                                </li>
                                                <li>
                                                    {
                                                        site.biking ?
                                                            <span>
                                                                <img src="https://image.flaticon.com/icons/svg/565/565350.svg" alt="" />
                                                                <p> Biking Trails</p>
                                                            </span>
                                                            :
                                                            null
                                                    }
                                                </li>
                                                <li>
                                                    {
                                                        site.wildlife ?
                                                            <span>
                                                                <img src="https://image.flaticon.com/icons/svg/54/54127.svg" alt="" />
                                                                <p> Wildlife Watching</p>
                                                            </span>
                                                            :
                                                            null
                                                    }
                                                </li>
                                                <li>
                                                    {
                                                        site.rafting ?
                                                            <span>
                                                                <img src="https://image.flaticon.com/icons/svg/38/38607.svg" alt="" />
                                                                <p> Rafting </p>
                                                            </span>
                                                            :
                                                            null
                                                    }
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {site.length === 0 ? null :
                                    <>
                                        <div className='spot_review_container'>
                                            <div className='review_header'>
                                                <p className="review_title">(fornow no)  Written reviews</p>
                                                <button onClick={this.handleClick} className="review_submit_button">Submit Review</button>
                                            </div>
                                        </div>

                                        <div>
                                            {/* <ReviewIndexContainer siteId={this.props.match.params.siteId} /> */}
                                        </div>
                                    </>
                                }
                            </div>

                            {/* <BookingContainer siteId={this.props.match.params.siteId} /> */}
                        </div>
                    </main >
                </>
            )
        }
    }
}

export default withRouter(Site);





