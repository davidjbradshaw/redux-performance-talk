import { assocPath, findIndex, pipe, propEq } from 'ramda'
import createData from './utils/createData'

const intialState = createData()
const { uuid } = intialState

const findKey = (key, state) => findIndex(propEq('id', key), state.array)

const updateArray = key => state =>
  assocPath(['array', findKey(key, state)], { found: true }, state)

export default (state = intialState, action) => {
  let newState = state

  const start = Date.now()

  switch (action.type) {
    case 'ARRAY_TEST':
      newState = pipe(
        updateArray(uuid[0]),
        updateArray(uuid[1]),
        updateArray(uuid[2]),
        updateArray(uuid[3]),
        updateArray(uuid[4]),
        updateArray(uuid[5]),
        updateArray(uuid[6]),
        updateArray(uuid[7]),
        updateArray(uuid[8]),
        updateArray(uuid[9])
      )(state)
      break

    default:
      return state
  }

  console.log(`${action.type} took ${Date.now() - start}ms`)
  return newState
}
