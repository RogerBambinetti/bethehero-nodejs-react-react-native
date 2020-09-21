import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';

export default function Routes() {
    return (
        <BrowserRouter >
            <Route path="/" exact component={Logon} />
            <Route path="/register" component={Register} />
        </BrowserRouter>
    );
}