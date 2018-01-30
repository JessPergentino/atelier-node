import React from 'react'

export default props => (

<form>
    <div className="form-row">
    <div className="form-group col-md-6">
        <label for="inputName">Nome do Cliente</label>
        <input type="text" className="form-control" id="inputName" placeholder="Insira um Nome"></input>
    </div>

    <div className="form-group col-md-6">
        <label for="inputAddress">Endereço</label>
        <input type="text" className="form-control" id="inputAddress" placeholder="Informe o Endereço"></input>
    </div>

    </div>

    <div className="form-row">
        <div className="form-group col-md-6">
            <label for="inputCity">Cidade</label>
            <input type="text" className="form-control" id="inputCity"></input>
        </div>

        <div className="form-group col-md-4">
            <label for="inputState">Estado</label>
            <input type="text" className="form-control" id="inputState" ></input>
        </div>

        <div className="form-group col-md-2">
            <label for="inputZip">CEP</label>
            <input type="text" className="form-control" id="inputZip"></input>
        </div>

        <table className="table table-sm col-md-6">
            <thead>
                <tr>
                <th scope="col">Santa</th>
                <th scope="col">Quantidade</th>
                <th scope="col">Valor</th>
                <th scope="col">Descrição</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td><input type="text" className="form-control" id="inputState" ></input></td>
                <td><input type="text" className="form-control" id="inputState" ></input></td>
                <td><input type="text" className="form-control" id="inputState" ></input></td>
                <td><input type="text" className="form-control" id="inputState" ></input></td>
                </tr>
                <tr>
                <td><input type="text" className="form-control" id="inputState" ></input></td>
                <td><input type="text" className="form-control" id="inputState" ></input></td>
                <td><input type="text" className="form-control" id="inputState" ></input></td>
                <td><input type="text" className="form-control" id="inputState" ></input></td>
                </tr>
                <tr>
                <td><input type="text" className="form-control" id="inputState" ></input></td>
                <td><input type="text" className="form-control" id="inputState" ></input></td>
                <td><input type="text" className="form-control" id="inputState" ></input></td>
                <td><input type="text" className="form-control" id="inputState" ></input></td>
                </tr>
            </tbody>
        </table>


        <div className="custom-control custom-radio">
            <h2>Formas de Pagamento</h2>
            <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input"></input>
            <label className="custom-control-label" for="customRadio1">Forma 1</label>
        </div>

        <div className="custom-control custom-radio">
            <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input"></input>
            <label className="custom-control-label" for="customRadio2">Forma 2</label>
        </div>

        <div className="custom-control custom-radio custom-control-inline">
            <h2>Formas de Envio</h2>
            <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input"></input>
            <label className="custom-control-label" for="customRadioInline1">Forma 1</label>
        </div>
        
        <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input"></input>
            <label className="custom-control-label" for="customRadioInline2">Forma 2</label>
        </div>

        <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input"></input>
            <label className="custom-control-label" for="customRadioInline2">Forma 3</label>
        </div>

        </div>

    <button type="submit" className="btn btn-primary">Salvar</button>
</form>
)