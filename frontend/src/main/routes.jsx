import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Dashboard from '../dashboard/dashboard'
import Encomenda from '../encomenda/encomenda' 

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard}/>
        <Route path='/ateliers' component={Encomenda}/>
        <Redirect from='*' to='/' />
    </Router>
)