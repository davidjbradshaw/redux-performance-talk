import { combineReducers } from 'redux'
import { pipe } from 'ramda'
import logSlowReducers from 'redux-log-slow-reducers'

import arrayReducer from './arrayReducer'
import mapReducer from './mapReducer'
import objectReducer from './objectReducer'
import valuesReducer from './valuesReducer'

const combineLogSlowReducers = pipe(
  logSlowReducers,
  combineReducers
)

export default combineLogSlowReducers({
  array: arrayReducer,
  map: mapReducer,
  object: objectReducer,
  values: valuesReducer,
})
