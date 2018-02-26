import React from 'react'

import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu' >
        <MenuItem path='#/' label='Pagina Principal' icon='list-ul'/>
        <MenuTree label='Cadastro' icon='edit'>
            <MenuItem path='#ateliers' label='Encomendas' icon='usd'/>
        </MenuTree>
    </ul>
)