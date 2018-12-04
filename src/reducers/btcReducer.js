const btcReducer = (state = { btc: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT_BTC':
      return {
        btc: state.btc + 1
      }
    case 'DECREMENT_BTC':
      if (state.btc > 0) {
        return {
          btc: state.btc - 1
        }
      } else {
        return state
      }
    case 'SET_BTC':
      return {
        btc: action.amount
      }
    default:
      return state
  }
}

export default btcReducer