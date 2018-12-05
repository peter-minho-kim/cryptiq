import React from 'react'
import { connect } from 'react-redux'
import {
  incrementBTC, incrementETH, incrementIOTA,
  decrementBTC, decrementETH, decrementIOTA,
  setBTC, setETH, setIOTA
} from '../actions/cart'

class CoinCart extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      btcQty: this.props.btcCart.btc,
      ethQty: this.props.ethCart.eth,
      iotaQty: this.props.iotaCart.iota,
      btcPrice: 12,
      ethPrice: 13,
      iotaPrice: 14,
      btcTotal: 4,
      ethTotal: 5,
      iotaTotal: 6
    }
  }
  onBtcInput = (e) => {
    const btcInput = e.target.value
    if (btcInput.match(/^\d{0,3}?$/)) {
      this.setState(() => ({ btcQty: btcInput }))
      this.props.setBTC(btcInput)
    }
  }
  onBtcIncrement = () => {
    if (this.state.btcQty < 999) {
      this.setState((prevState) => ({ btcQty: parseInt(prevState.btcQty) + 1 }))
      this.props.incrementBTC()
    }
  }
  onBtcDecrement = () => {
    if (this.state.btcQty > 1) {
      this.setState((prevState) => ({ btcQty: parseInt(prevState.btcQty) - 1 }))
      this.props.decrementBTC()
    } else {
      this.setState(() => ({ btcQty: 0 }))
    }
  }
  onEthInput = (e) => {
    const ethInput = e.target.value
    if (ethInput.match(/^\d{0,3}?$/)) {
      this.setState(() => ({ ethQty: ethInput }))
      this.props.setETH(ethInput)
    }
  }
  onEthIncrement = () => {
    if (this.state.ethQty < 999) {
      this.setState((prevState) => ({ ethQty: parseInt(prevState.ethQty) + 1 }))
      this.props.incrementETH()
    }
  }
  onEthDecrement = () => {
    if (this.state.ethQty > 1) {
      this.setState((prevState) => ({ ethQty: parseInt(prevState.ethQty) - 1 }))
      this.props.decrementETH()
    } else {
      this.setState(() => ({ ethQty: 0 }))
    }
  }
  onIotaInput = (e) => {
    const iotaInput = e.target.value
    if (iotaInput.match(/^\d{0,3}?$/)) {
      this.setState(() => ({ iotaQty: iotaInput }))
      this.props.setIOTA(iotaInput)
    }
  }
  onIotaIncrement = () => {
    if (this.state.iotaQty < 999) {
      this.setState((prevState) => ({ iotaQty: parseInt(prevState.iotaQty) + 1 }))
      this.props.incrementIOTA()
    }
  }
  onIotaDecrement = () => {
    if (this.state.iotaQty > 1) {
      this.setState((prevState) => ({ iotaQty: parseInt(prevState.iotaQty) - 1 }))
      this.props.decrementIOTA()
    } else {
      this.setState(() => ({ iotaQty: 0 }))
    }
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
            <p className="coin-cart__crypto-price">${this.state.btcPrice}</p>
          </div>
          <div className="coin-cart__input-box">
            <i className="fas fa-minus coin-cart__math-btn" onClick={this.onBtcDecrement}></i>
            <input 
              type="text" 
              className="coin-cart__input" 
              onChange={this.onBtcInput} 
              value={this.state.btcQty} 
              placeholder="0"
            />
            <i className="fas fa-plus coin-cart__math-btn" onClick={this.onBtcIncrement}></i>
          </div>
          <div className="coin-cart__line-total">
            <p className="coin-cart__line-total__number">${(this.state.btcQty * this.state.btcPrice).toFixed(2)}</p>
          </div>
        </div>
        
        <div className="coin-cart__row">
          <div className="coin-cart__crypto-img-box">
            <img src="./images/bitcoin.png" alt="bitcoin" className="coin-cart__img" />
          </div>
          <div className="coin-cart__crypto-info">
            <p className="coin-cart__crypto-name">Ethereum (ETH)</p>
            <p className="coin-cart__crypto-price">${this.state.ethPrice}</p>
          </div>
          <div className="coin-cart__input-box">
            <i className="fas fa-minus coin-cart__math-btn" onClick={this.onEthDecrement}></i>
            <input 
              type="text" 
              className="coin-cart__input" 
              onChange={this.onEthInput} 
              value={this.state.ethQty} 
              placeholder="0"
            />
            <i className="fas fa-plus coin-cart__math-btn" onClick={this.onEthIncrement}></i>
          </div>
          <div className="coin-cart__line-total">
            <p className="coin-cart__line-total__number">${(this.state.ethQty * this.state.ethPrice).toFixed(2)}</p>
          </div>
        </div>

        <div className="coin-cart__row">
          <div className="coin-cart__crypto-img-box">
            <img src="./images/bitcoin.png" alt="bitcoin" className="coin-cart__img" />
          </div>
          <div className="coin-cart__crypto-info">
            <p className="coin-cart__crypto-name">Iota (MIOTA)</p>
            <p className="coin-cart__crypto-price">${this.state.iotaPrice}</p>
          </div>
          <div className="coin-cart__input-box">
            <i className="fas fa-minus coin-cart__math-btn" onClick={this.onIotaDecrement}></i>
            <input 
              type="text" 
              className="coin-cart__input" 
              onChange={this.onIotaInput} 
              value={this.state.iotaQty} 
              placeholder="0"
            />
            <i className="fas fa-plus coin-cart__math-btn" onClick={this.onIotaIncrement}></i>
          </div>
          <div className="coin-cart__line-total">
            <p className="coin-cart__line-total__number">${(this.state.iotaQty * this.state.iotaPrice).toFixed(2)}</p>
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