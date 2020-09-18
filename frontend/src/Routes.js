import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Logon from './pages/Logon';

export default function Routes() {
    return (
        <BrowserRouter >
            <Route path="/" component={Logon} />
        </BrowserRouter>
    );
}