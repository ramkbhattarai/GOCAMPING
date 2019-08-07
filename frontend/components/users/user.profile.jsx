import React from 'react';
import { Link } from 'react-router-dom';

import { format } from 'date-fns';

class UserProfile extends React.Component{
    constructor(props){
        super(props);
       
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchAllBookings();
        this.props.fetchSites();
        
    }

   

    render(){
        
            return(
              
                <div className="user_profile_container">
                    <div className="user_profile_sidebar">
                        <div className="bio_panel">
                            <h3 id="bio_panel_name">{this.props.currentUser.fname}</h3>
                            <br />
                        
                        </div>
                        <div className="user_profile_booking_status">
                            <div className="user_status_header">
                                No current trips. Ok Let's <Link className="user_link_index" to={'/sites'}> go out to nature</Link>
                            </div>
                        </div>
                    </div>
                </div>
        
            )           
    }
}

export default UserProfile;