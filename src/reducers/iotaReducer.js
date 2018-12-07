const iotaReducer = (state = { iota: '' }, action) => {
  switch (action.type) {
    case 'INCREMENT_IOTA':
      return {
        iota: state.iota + 1
      }
    case 'DECREMENT_IOTA':
      if (state.iota > 0) {
        return {
          iota: state.iota - 1
        }
      } else {
        return state
      }
    case 'SET_IOTA':
      return {
        iota: action.amount
      }
    default:
      return state
  }
}

export default iotaReducer