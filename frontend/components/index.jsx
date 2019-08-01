import React from 'react';
import { Link } from 'react-router-dom';



class Index extends React.Component {
    render() {
        return (
            <div>
                <div className="landing-page">

                    <div className='landing-page-top-left'>
                        <div className='landing-page-title'>Find yourself</div>
                        <div className='landing-page-second'>outside.</div>
                        <div className='landing-page-tagline'> Search, discover, and book over <strong>200,000 </strong>campsites around you.</div>
 
                        <div className='index-to-sites'><Link to="/sites"><span>or Discover the best camps near you &#8594;</span> </Link></div>

                    </div>

                    <img className="landing-page-image" src={"https://nepalecoadventure.com/wp-content/uploads/2018/03/Everest-Base-Camp-Weather.jpg"} />
                </div>

                <div className='landing-page-image-caption'><strong>The Everest BaseCamp</strong> hosted by Shrepas in the Mountains</div>
            </div>
        )
    }
}

export default Index;
