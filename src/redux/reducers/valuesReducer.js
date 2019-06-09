import createData from './utils/createData'

const intialState = createData()

export default (state = intialState, action) => {
  let newState = state

  const start = Date.now()

  switch (action.type) {
    case 'VALUES_TEST':
      newState = {
        ...state,
        values: Object.values(state.object),
      }
      break

    default:
      return state
  }

  console.log(`${action.type} took ${Date.now() - start}ms`)
  return newState
}
