import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Modal from './modal/modal';
import Index from './index';
import GreetingContainer from './greeting/greeting_container';
import SiteContainer from './sites/site_container';
import SiteSearchContainer from './explore/site_search_container';
import SiteFormContainer from './sites/site_form_container';
import  UserProfileContainer from './users/user_profile_container';
import CreateReviewContainer from './reviews/create_review_container';

const App = () => (
    <div>
        <Modal />
           <header>
               <GreetingContainer/>
           </header>
     
        <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/sites/:siteId" component={SiteContainer}/>
            <Route exact path='/sites' component={SiteSearchContainer}/>
            <Route exact path="/host" component={SiteFormContainer} />
            <Route exact path="/users/:userId" component={UserProfileContainer}/>
            <Route exact path="/sites/:siteId/review/new" component={CreateReviewContainer} />
            <Redirect to="/" />
        </Switch>
    </div>
);

export default App;