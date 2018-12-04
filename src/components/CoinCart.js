import React from 'react'
import { connect } from 'react-redux'

class CoinCart extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <div className="coin-cart">
        <div className="coin-cart__row">
          <div className="coin-cart__crypto-img-box">
            <img src="./images/bitcoin.png" alt="bitcoin" className="coin-cart__img" />
          </div>
          <div className="coin-cart__crypto-info">
            <p className="coin-cart__crypto-name">Bitcoin (BTC)</p>
            <p className="coin-cart__crypto-price">$4,321.99</p>
          </div>
          <div className="coin-cart__input-box">
            <input type="text" className="coin-cart__input" />
          </div>
          <div className="coin-cart__line-total">
            $4,321.99
          </div>
        </div>
        <div className="coin-cart__row">
          <div className="coin-cart__crypto-img-box">
            <img src="./images/bitcoin.png" alt="bitcoin" className="coin-cart__img" />
          </div>
          <div className="coin-cart__crypto-info">
            <p className="coin-cart__crypto-name">Ethereum (ETH)</p>
            <p className="coin-cart__crypto-price">$4,321.99</p>
          </div>
          <div className="coin-cart__input-box">
            <input type="text" className="coin-cart__input" />
          </div>
          <div className="coin-cart__line-total">
            $4,321.99
          </div>
        </div>
        <div className="coin-cart__row">
          <div className="coin-cart__crypto-img-box">
            <img src="./images/bitcoin.png" alt="bitcoin" className="coin-cart__img" />
          </div>
          <div className="coin-cart__crypto-info">
            <p className="coin-cart__crypto-name">Iota (MIOTA)</p>
            <p className="coin-cart__crypto-price">$4,321.99</p>
          </div>
          <div className="coin-cart__input-box">
            <input type="text" className="coin-cart__input" />
          </div>
          <div className="coin-cart__line-total">
            $4,321.99
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  btcCart: state.btc,
  ethCart: state.eth,
  iotaCart: state.iota
})

const mapDispatchToProps = (dispatch) => ({
  incrementBTC: () => dispatch(incrementBTC()),
  decrementBTC: () => dispatch(decrementBTC()),
  setBTC: (amount) => dispatch(setBTC(amount)),
  incrementETH: () => dispatch(incrementETH()),
  decrementETH: () => dispatch(decrementETH()),
  setETH: (amount) => dispatch(setETH(amount)),
  incrementIOTA: () => dispatch(incrementIOTA()),
  decrementIOTA: () => dispatch(decrementIOTA()),
  setIOTA: (amount) => dispatch(setIOTA(amount)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CoinCart)