import combineReducers from './utils/combineReducers'
import reduceReducers from 'reduce-reducers'

import arrayReducer from './arrayReducer'
import mapReducer from './mapReducer'
import objectReducer from './objectReducer'
import valuesReducer from './valuesReducer'

const test = reduceReducers(
  arrayReducer,
  mapReducer,
  objectReducer,
  valuesReducer
)

export default combineReducers({
  test,
})
