import React from 'react';

import { connect } from 'react-redux';
import { fetchSites } from '../actions/site_actions';
import {receiveGeolocation} from '../actions/location_filter_actions';

class Index extends React.Component {
    constructor(props) {
        super(props);

    
          this.state = {
              searchParams: ''
          };  
       

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchSites();
    }

  

    handleClick(e) {
        let site = Object.values(this.props.state.entities.sites)[e]
        this.props.history.push(`/sites/${site.id}`);
    }

    update(field){
        return e => {
            this.setState(
                {
                    [field]: e.target.value
                }
            )
        }
    }
   handleSubmit(e){
       e.preventDefault();
       this.props.receiveGeolocation(e.target.children[0].value);
       this.props.history.push('/sites');
   }

    render() {
        // const siteSectionDivs = this.props.sites.map(site => {
        //     return (

        //     )
        // })

        return (
            <>
                <main className="splash_main">
                    <div className="splash_subtitle1">
                        Find yourself outside.
                    </div>

                    <div className="splash_subtitle2">
                        Book unique camping experiences on over <nobr className="bold">300,000</nobr> campsites, ranches, vineyards, public parks and more.
                    </div>

                    <div className="search_bar_main">
                        <i className="fas fa-search search_bar_icon"></i>
                        <form className="search_form" onSubmit={this.handleSubmit}>
                            <input placeholder="Visit Nepal..." className="search_bar" onChange={this.update('searchParams')} 
                            value={this.state['searchParams']}
                             />
                            <input onClick={() => this.handleSubmit} type="submit" className="search_button" value="Search" />
                        </form>
                    </div>

                    <div className="splash_subtitle3">
                        Discover camping...
                    </div>

                    <div className="splash_container">
                        <div className="splash_main_section">
                            <div className="splash_section" onClick={() => this.handleClick(0)}>
                                <div className="splash_section_img">
                                    <img src="https://www.holidify.com/images/cmsuploads/compressed/camping-1835352_1920_20180627142357.jpg" alt="" />
                                </div>
                                <div className="splash_section_details">
                                    <h3 className="splash_section_name">Camp near by mountains</h3>
                                    <div className="splash_section_location">
                                        Nepal
                                    </div>
                                </div>
                            </div>

                            <div className="splash_section" onClick={() => this.handleClick(1)}>
                                <div className="splash_section_img">
                                    <img src="https://www.holidify.com/images/cmsuploads/compressed/camping-1835352_1920_20180627142357.jpg" alt="" />
                                </div>
                                <div className="splash_section_details">
                                    <h3 className="splash_section_name">Oh! thy Majestic Mountains</h3>
                                    <div className="splash_section_location">
                                        Nepal
                                    </div>
                                </div>
                            </div>

                            <div className="splash_section" onClick={() => this.handleClick(2)}>
                                <div className="splash_section_img">
                                    <img src="https://www.holidify.com/images/cmsuploads/compressed/camping-1835352_1920_20180627142357.jpg" alt="" />
                                </div>
                                <div className="splash_section_details">
                                    <h3 className="splash_section_name">Snow capped Mountain Camping</h3>
                                    <div className="splash_section_location">
                                        Nepal
                                    </div>
                                </div>
                            </div>

                            <div className="splash_section" onClick={() => this.handleClick(3)}>
                                <div className="splash_section_img">
                                    <img src="https://www.holidify.com/images/cmsuploads/compressed/camping-1835352_1920_20180627142357.jpg" alt="" />
                                </div>
                                <div className="splash_section_details">
                                    <h3 className="splash_section_name">Enveloped within the arms of nature</h3>
                                    <div className="splash_section_location">
                                        Nepal
                                </div>
                                </div>
                            </div>

                            <div className="splash_section" onClick={() => this.handleClick(4)}>
                                <div className="splash_section_img">
                                    <img src="https://www.holidify.com/images/cmsuploads/compressed/camping-1835352_1920_20180627142357.jpg" alt="" />
                                </div>
                                <div className="splash_section_details">
                                    <h3 className="splash_section_name">Mountain is calling</h3>
                                    <div className="splash_section_location">
                                        Nepal
                                    </div>
                                </div>
                            </div>

                            <div className="splash_section" onClick={() => this.handleClick(8)}>
                                <div className="splash_section_img">
                                    <img src="https://www.holidify.com/images/cmsuploads/compressed/camping-1835352_1920_20180627142357.jpg" alt="" />
                                </div>
                                <div className="splash_section_details">
                                    <h3 className="splash_section_name">Go back to nature</h3>
                                    <div className="splash_section_location">
                                        Nepal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
   
            </>
        )
    }
}

const msp = (state) => {
    return {
        state
    }
}

const mdp = (dispatch) => {
    return {
        fetchSites: () => dispatch(fetchSites()),
        receiveGeolocation: loc => dispatch(receiveGeolocation(loc))
    }
};

export default connect(msp, mdp)(Index);