import React, {Component} from 'react'
import PageHeader from '../template/pageHeader'

import EncomendasForm from './encomendasForm'

export default class Atelier extends Component {
    render() {
        return(
            <div>
                <PageHeader name='Encomendas' small='Cadastro'></PageHeader>
                <EncomendasForm />
            </div>
        )
    }
}