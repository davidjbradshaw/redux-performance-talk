import uuidv4 from 'uuid/v4'
import { takeLast } from 'ramda'

const ITEMS = 10000

export default () => {
  const uuid = []
  const obj = {}

  const keys = Array.from(Array(ITEMS)).map((_, i) => {
    uuid[i] = uuidv4()
    const myObject = { id: uuid[i] }
    obj[uuid[i]] = myObject
    return myObject
  })

  return {
    array: keys,
    object: obj,
    uuid: takeLast(10, uuid),
  }
}
