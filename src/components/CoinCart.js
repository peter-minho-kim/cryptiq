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
      btc: this.props.btcCart.btc,
      eth: this.props.ethCart.eth,
      iota: this.props.iotaCart.iota
    }
  }
  onBtcInput = (e) => {
    const btcInput = e.target.value
    // ^[0-9]*$
    // ^[1-9][0-9]*$
    // ^\d{1,}(\.\d{0,3})?$
    if (!btcInput || btcInput.match(/^[0-9]{1,3}$/)) {
      this.setState(() => ({ btc: btcInput }))
      this.props.setBTC(btcInput)
    }
  }
  onBtcIncrement = () => {
    this.setState((prevState) => ({ btc: parseFloat(prevState.btc) + 1.0 }))
    this.props.incrementBTC()
    console.log(typeof this.state.btc)
  }
  onBtcDecrement = () => {
    if (this.state.btc > 1) {
      this.setState((prevState) => ({ btc: parseFloat(prevState.btc - 1.0) }))
      this.props.decrementBTC()
    } else {
      this.setState(() => ({ btc: 0 }))
    }
  }
  onEthInput = (e) => {
    const ethInput = e.target.value
    if (!ethInput || ethInput.match(/^\d{1,}(\.\d{0,3})?$/)) {
      this.setState(() => ({ eth: ethInput }))
      this.props.setETH(ethInput)
    }
  }
  onIotaInput = (e) => {
    const iotaInput = e.target.value
    if (!iotaInput || iotaInput.match(/^\d{1,}(\.\d{0,3})?$/)) {
      this.setState(() => ({ iota: iotaInput }))
      this.props.setIOTA(iotaInput)
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
            <p className="coin-cart__crypto-price">$4,321.99</p>
          </div>
          <div className="coin-cart__input-box">
            <i className="fas fa-minus coin-cart__math-btn" onClick={this.onBtcDecrement}></i>
            <input 
              type="text" 
              className="coin-cart__input" 
              onChange={this.onBtcInput} 
              value={this.state.btc} 
              placeholder="0"
            />
            <i className="fas fa-plus coin-cart__math-btn" onClick={this.onBtcIncrement}></i>
          </div>
          <div className="coin-cart__line-total">
            <p className="coin-cart__line-total__number">$4,321.99</p>
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
            <i className="fas fa-minus coin-cart__math-btn"></i>
            <input 
              type="text" 
              className="coin-cart__input" 
              onChange={this.onEthInput} 
              value={this.state.eth} 
              placeholder="0"
            />
            <i className="fas fa-plus coin-cart__math-btn"></i>
          </div>
          <div className="coin-cart__line-total">
            <p className="coin-cart__line-total__number">$4,321.99</p>
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
            <i className="fas fa-minus coin-cart__math-btn"></i>
            <input 
              type="text" 
              className="coin-cart__input" 
              onChange={this.onIotaInput} 
              value={this.state.iota} 
              placeholder="0"
            />
            <i className="fas fa-plus coin-cart__math-btn"></i>
          </div>
          <div className="coin-cart__line-total">
            <p className="coin-cart__line-total__number">$4,321.99</p>
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