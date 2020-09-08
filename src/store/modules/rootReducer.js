import {combineReducers} from 'redux'

import exampleReducer from './examples/reducers'

export default combineReducers ({
  example:exampleReducer
})