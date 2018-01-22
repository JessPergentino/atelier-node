import React from 'react'

export default props => (
    <nav className='navbar navbar-inverse bg-inverse'>
        <div className='container'>
            <div className='navbar-header'>
                <a className='navbar-brand' href="#">
                    <i className='fa fa-calendar-check-o'></i> Atelier Santa Perola
                </a>
            </div>

            <div id='navbar' className='navbar-collapse collapse'>
                <ul className='nav navbar-nav'>
                    <li><a href="#/cliente">Cadastro-Cliente</a></li>
                    <li><a href="#/encomendas">Cadastro-Encomendas</a></li>
                    <li><a href="#/list-encomenda">Encomendas</a></li>
                    <li><a href="#/about">Sobre</a></li>
                    
                </ul>
            </div>
        </div>
    </nav>
)