import React from 'react';
import {withRouter} from 'react-router-dom';

const SplashForm = (props) => {
    
        let splash;
        const currentUserId = props.currentUserId;
        if(currentUserId){
                splash =(
                        <div className="for-logged-in-user">
                            <h1>Wherever You want to Camp</h1>
                          
                            <p>Book unique camping experiences on over 300,000 campsites, ranches, vineyards, public parks and more.</p>
                        </div>
                )
        }else{
            splash = (
                <div className="for-all-user">
                    <h1>Go Out To NATURE</h1>
                    <p>Book unique camping experiences on over 300,000 campsites, ranches, vineyards, public parks and more.</p>
                </div>
                
            )
        }
       
        return (
            <>
                {splash}
            </>
        )
   
    
}

export default withRouter(SplashForm);