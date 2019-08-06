import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Modal from './modal/modal';
import Index from './index';
import GreetingContainer from './greeting/greeting_container';
import SiteContainer from './sites/site_container';
import SiteSearchContainer from './explore/site_search_container';
import SiteFormContainer from './sites/site_form_container';
import { ProtectedRoute } from '../util/route_util';

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
            <ProtectedRoute path="/host" component={SiteFormContainer} />
            <Redirect to="/" />
        </Switch>
    </div>
);

export default App;