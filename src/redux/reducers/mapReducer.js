import createData from './utils/createData'

const { intialState } = createData()

const toObject = state => {
  const object = {}

  state.array.forEach(item => (object[item.id] = item))

  return object
}

export default (state = intialState, action) => {
  switch (action.type) {
    case 'MAP_TEST':
      return {
        ...state,
        map: toObject(state),
      }

    default:
      return state
  }
}
