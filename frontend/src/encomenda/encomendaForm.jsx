import React, {Component} from 'react'
import {reduxForm, Field} from 'redux-form'
import LabelAndInput from '../common/form/labelAndInput'

class EncomendaForm extends Component {
    render() {
        const {handleSubmit} = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body' >
                    <Field name='Cliente' component={LabelAndInput}
                        label='Nome do Cliente' cols='12 4' placeholder='Informe o Nome'/>
                    
                    <Field name='Data de Entrega' component={LabelAndInput} type='date'
                        label='Data de Entrega' cols='12 4' placeholder='Informe a Data'/>
                    
                    <Field name='Valor' component={LabelAndInput} type='number'
                        label='Valor' cols='12 4' placeholder='Informe o Valor'/>
                </div>
                <div className='box-footer' >
                    <button type='submit' className='btn btn-primary' >Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({form: 'encomendaForm'}) (EncomendaForm)