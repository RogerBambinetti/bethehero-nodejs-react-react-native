import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Logon from './pages/Logon';
import Profile from './pages/Profile';
import Register from './pages/Register';

export default function Routes() {
    return (
        <BrowserRouter >
            <Route path="/" exact component={Logon} />
            <Route path="/profile" component={Profile} />
            <Route path="/register" component={Register} />
        </BrowserRouter>
    );
}