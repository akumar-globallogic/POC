// reducers/index.js

import { combineReducers } from 'redux'
import namesReducer from './OperationReducer'

const rootReducer = combineReducers({
    namesReducer
})

export default rootReducer