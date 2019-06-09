import createData from './utils/createData'

const intialState = createData()

const toObject = state => {
  const object = {}

  state.array.forEach(item => (object[item.id] = item))

  return object
}

export default (state = intialState, action) => {
  let newState = state

  const start = Date.now()

  switch (action.type) {
    case 'MAP_TEST':
      newState = {
        ...state,
        map: toObject(state),
      }
      break

    default:
      return state
  }

  console.log(`${action.type} took ${Date.now() - start}ms`)
  return newState
}
