import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {getList} from './encomendaActions'


class EncomendaList extends Component {

    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(en => (
            <tr key={en._id} >
                <td>{en.cliente}</td>
                <td>{en.dataEntrega}</td>
                <td>{en.value}</td>
            </tr>
        ))
    }

    render() {
        return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Cliente</th>
                        <th>Data Entrega</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows}
                </tbody>
            </table>
        </div>
        )
    }
}

const mapStateToProps = state => ({list: state.encomenda.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps) (EncomendaList)