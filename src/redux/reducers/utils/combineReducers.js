import { combineReducers } from 'redux'
import { pipe } from 'ramda'
import logSlowReducers from 'redux-log-slow-reducers'

export default (process.env.NODE_ENV === 'production'
  ? combineReducers
  : pipe(
      logSlowReducers,
      combineReducers
    ))
