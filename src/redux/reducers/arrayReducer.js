import { assocPath, findIndex, pipe, propEq } from 'ramda'
import createData from './utils/createData'

const { intialState, uuid } = createData()

const findKey = (key, state) => findIndex(propEq('id', key), state.array)

const updateArray = key => state =>
  assocPath(['array', findKey(key, state)], { found: true }, state)

export default (state = intialState, action) => {
  switch (action.type) {
    case 'ARRAY_TEST':
      return pipe(
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

    default:
      return state
  }
}
