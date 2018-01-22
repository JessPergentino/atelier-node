import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Atelier from '../atelier/atelier'
import About from '../about/about'
import Cliente from '../cliente/cliente'
import ListEncomenda from '../list-encomendas/list-encomendas'

export default props => (
    <Router  history={hashHistory}>
        <Route path='/encomendas' component={Atelier}/>
        <Route path='/about' component={About}/>
        <Route path='/cliente' component={Cliente}/>
        <Route path='/list-encomenda' component={ListEncomenda} />
        <Redirect from='*' to='/encomendas'/>
    </Router>
)