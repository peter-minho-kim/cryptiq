import { createStore, combineReducers } from 'redux'
import btcReducer from '../reducers/btcReducer'
import ethReducer from '../reducers/ethReducer'
import iotaReducer from '../reducers/iotaReducer'

export default () => {
  const store = createStore(
    combineReducers({
      btc: btcReducer,
      eth: ethReducer,
      iota: iotaReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  return store
}
