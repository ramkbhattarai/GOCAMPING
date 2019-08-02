import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Modal from './modal/modal';
import Index from './index';
import GreetingContainer from './greeting/greeting_container';
import SiteContainer from './sites/site_container';


const App = () => (
    <div>
        <Modal />
           <header>
               <GreetingContainer/>
           </header>
     
        <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/sites/:siteId" component={SiteContainer}/>
            <Redirect to="/" />
        </Switch>
    </div>
);

export default App;