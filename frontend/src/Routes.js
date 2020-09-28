import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Logon from './pages/Logon';
import Profile from './pages/Profile';
import Register from './pages/Register';
import NewIncident from './pages/NewIncident';

export default function Routes() {
    return (
        <BrowserRouter >
            <Route path="/" exact component={Logon} />
            <Route path="/profile" component={Profile} />
            <Route path="/register" component={Register} />
            <Route path="/newIncident" component={NewIncident} />
        </BrowserRouter>
    );
}