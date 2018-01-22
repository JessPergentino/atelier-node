import React from 'react'

export default props => (
    <div role='form' className='EncomendasForm'>
 
    <div className="form-row">
    <div className='col-xs-12 col-sm-9 col-md-10'>
    
    <label for="validationCustom01">Nome do Cliente</label>
    <input type="text" id="validationCustom01" placeholder="Insira um nome" required></input>

    <label for="validationCustom01">Nome do Cliente</label>
    <input type="text" id="validationCustom01" placeholder="Insira um nome" required></input>
     
    </div>
     
    <div className='col-xs-12 col-sm-3 col-md-2'>
    <button className='btn btn-primary'>
    <i className='fa fa-plus'></i>
    </button>
    </div>
    </div>
    </div>   
)