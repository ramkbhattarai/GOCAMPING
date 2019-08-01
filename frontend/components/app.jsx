import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Modal from './modal/modal';
import Index from './index';
import GreetingContainer from './greeting/greeting_container';


const App = () => (
    <div>
        <Modal />
           <header>
               <GreetingContainer/>
           </header>
     
        <Switch>
            <Route exact path="/" component={Index} />
            <Redirect to="/" />
        </Switch>
    </div>
);

export default App;