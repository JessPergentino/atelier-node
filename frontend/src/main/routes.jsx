import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Atelier from '../atelier/atelier'
import About from '../about/about'

export default props => (
    <Router  history={hashHistory}>
        <Route path='/encomendas' component={Atelier}/>
        <Route path='/about' component={About}/>
        <Redirect from='*' to='/encomendas'/>
    </Router>
)