const ethReducer = (state = { eth: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT_ETH':
      return {
        eth: state.eth + 1
      }
    case 'DECREMENT_ETH':
      if (state.eth > 0) {
        return {
          eth: state.eth -1
        }
      } else {
        return state
      }
    case 'SET_ETH':
      return {
        eth: action.amount
      }
    default:
      return state
  }
}

export default ethReducer