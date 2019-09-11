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
                    [field]: e.currentTarget.value
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
                                    <img src="https://www.gokyotreksnepal.com/wp-content/uploads/2018/09/nepal-camping-trekking.jpg" alt="" />
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
                                    <img src="https://www.cityshor.com/uploads/article/12_2014/1417409544_906374_554771084562521_1158281277_o.jpg" alt="" />
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
                                    <img src="http://www.adventurepolygon.com/wp-content/uploads/2018/01/Camping-Near-Rara-Lake-Nepal-Tourist-Places-in-Nepal.jpg" alt="" />
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
                                    <img src="https://nepalecoadventure.com/wp-content/uploads/2015/05/Rara-Lake-Trekking-V.jpg" alt="" />
                                </div>
                                <div className="splash_section_details">
                                    <h3 className="splash_section_name">Mountain is calling</h3>
                                    <div className="splash_section_location">
                                        Nepal
                                    </div>
                                </div>
                            </div>

                            <div className="splash_section" onClick={() => this.handleClick(5)}>
                                <div className="splash_section_img">
                                    <img src="https://www.adventureinyou.com/wp-content/uploads/2014/01/nepal-dolpo-trek-960x640.jpg" alt="" />
                                </div>
                                <div className="splash_section_details">
                                    <h3 className="splash_section_name">Go back to nature</h3>
                                    <div className="splash_section_location">
                                        Nepal
                                    </div>
                                </div>
                            </div>

                            <div className="splash_section" onClick={() => this.handleClick(6)}>
                                <div className="splash_section_img">
                                    <img src="https://cdn.kimkim.com/files/a/content_articles/featured_photos/004606ca2b44e3d7402c87b99e62bcd91f960fb7/big-b5abb9baa0f7f4a0884170b2caaf483e.jpg" alt="" />
                                </div>
                                <div className="splash_section_details">
                                    <h3 className="splash_section_name">Open hills</h3>
                                    <div className="splash_section_location">
                                        Nepal
                                    </div>
                                </div>
                            </div>

                            <div className="splash_section" onClick={() => this.handleClick(7)}>
                                <div className="splash_section_img">
                                    <img src="https://trekroute.com/wp-content/uploads/2014/12/Ghandruk-Short-easy-trek-nepal.jpg" alt="" />
                                </div>
                                <div className="splash_section_details">
                                    <h3 className="splash_section_name">Mountains in Sight</h3>
                                    <div className="splash_section_location">
                                        Nepal
                                    </div>
                                </div>
                            </div>

                            <div className="splash_section" onClick={() => this.handleClick(8)}>
                                <div className="splash_section_img">
                                    <img src="http://www.excitingnepalholidays.com/images/panchase-trek.jpg" alt="" />
                                </div>
                                <div className="splash_section_details">
                                    <h3 className="splash_section_name">Refreshing filed in the lap of mountains</h3>
                                    <div className="splash_section_location">
                                        Nepal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <footer>
                    <div className="foot_div">
                        <div className="foot_div_section">
                            <div className="foot_description">
                                <div className="foot_description_title">
                                    GoCamping is everywhere you want to camp.
                            </div>
                                <div className="foot_description_text">
                                    Discover unique experiences on nature preserves, farms,vineyards, and public campgrounds across Nepal. Book tent camping, treehouses, cabins, yurts, primitive backcountry sites,car camping, tiny houses, glamping tents and more.
                            </div>
                            </div>

                            <div className="foot_social">
                                <div className="foot_social_title">
                                    <div className="foot_description_title">
                                        Social
                                </div>

                                    <div className="social_link_li">
                                        <a target="_blank" href="https://github.com/ramkbhattarai" className="social_link"><i className="fab fa-github">&nbsp; Github</i></a>

                                    </div>
                                    <div className="social_link_li">
                                        <a target="_blank" href="https://www.linkedin.com/in/ram-krishna-bhattarai-bb761a17a/" className="social_link"><i className="fab fa-linkedin">&nbsp; Linkedin</i></a>

                                    </div>
                                    <div className="social_link_li">
                                        <a target="_blank" href="https://ramkbhattarai.github.io/ramkbhattarai/" className="social_link"><i id="portfolio_link" className="fas fa-user"> &nbsp; Portfolio</i></a>

                                    </div>
                                    <div className="social_link_li">
                                        <a target="_blank" href="https://angel.co/ram-krishna-bhattarai" className="social_link"><i className="fab fa-angellist"> &nbsp; AngelList</i></a>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </footer>
   
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