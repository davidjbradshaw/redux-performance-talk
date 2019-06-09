import createData from './utils/createData'

const intialState = createData()
const { uuid } = intialState

export default (state = intialState, action) => {
  let newState = state

  const start = Date.now()

  switch (action.type) {
    case 'OBJECT_TEST':
      newState = {
        ...state,
        object: {
          ...state.object,
          [uuid[0]]: { found: true },
          [uuid[1]]: { found: true },
          [uuid[2]]: { found: true },
          [uuid[3]]: { found: true },
          [uuid[4]]: { found: true },
          [uuid[5]]: { found: true },
          [uuid[6]]: { found: true },
          [uuid[7]]: { found: true },
          [uuid[8]]: { found: true },
          [uuid[9]]: { found: true },
        },
      }
      break

    default:
      return state
  }

  console.log(`${action.type} took ${Date.now() - start}ms`)
  return newState
}
