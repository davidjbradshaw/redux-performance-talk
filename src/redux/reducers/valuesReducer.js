import createData from './utils/createData'

const { intialState } = createData()

export default (state = intialState, action) => {
  switch (action.type) {
    case 'VALUES_TEST':
      return {
        ...state,
        values: Object.values(state.object),
      }

    default:
      return state
  }
}
