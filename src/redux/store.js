import { createStore } from 'redux' // , applyMiddleware
// import logger from 'redux-logger'
import rootReducer from './reducers/rootReducer'
export default function configureStore() {
  return createStore(rootReducer) //, applyMiddleware(logger))
}
