

import { combineReducers } from 'redux'
import { alphaReducer } from './redux/alpha'

export const RootReducer = combineReducers({
    alpha: alphaReducer
})
