import { createStore } from 'redux'
import rootReducer from './src/Reducers'

export default function configureStore() {
  let store = createStore(rootReducer)
  return store
}