import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import {reducer as toastrReducer} from 'react-redux-toastr'

import TabReducer from '../common/tab/tabReducer'
import EncomendaReducer from '../encomenda/encomendaReducer'

const rootReducer = combineReducers({
    tab: TabReducer,
    encomenda: EncomendaReducer,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducer