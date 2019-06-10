import createData from './utils/createData'

const { intialState, uuid } = createData()

export default (state = intialState, action) => {
  switch (action.type) {
    case 'OBJECT_TEST':
      return {
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

    default:
      return state
  }
}
