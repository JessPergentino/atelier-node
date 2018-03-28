import axios from 'axios'
import {toastr} from 'react-redux-toastr'
import {reset as resetForm} from 'redux-form'
import {showTabs, selectTab} from '../common/tab/tabAction'

const BASE_URL = 'http://localhost:3003/api'

export function getList() {
    const request = axios.get(`${BASE_URL}/ateliers`)
    return {
        type: 'ENCOMENDA_FETCHED',
        payload: request
    }
}

export function create(values) {
    return dispatch => {
    axios.post(`${BASE_URL}/ateliers`, values)
        .then(resp => {
            toastr.success('Sucesso', 'Operação Realizada com Sucesso.')
            dispatch([
                resetForm('encomendaForm'),
                getList(),
                selectTab('tabList'),
                showTabs('tabList', 'tabCreate')
            ])
        })
        .catch(e => {
            e.response.data.errors.forEach(erro => toastr.erro('Erro', erro))
        })
    }
}