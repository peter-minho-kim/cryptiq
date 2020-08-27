import React from 'react';
import { connect } from 'react-redux';
import {
  incrementBTC,
  incrementETH,
  incrementIOTA,
  decrementBTC,
  decrementETH,
  decrementIOTA,
  setBTC,
  setETH,
  setIOTA
} from '../actions/cart';
import Payment from './Payment';

class CoinCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      btcQty: this.props.btcCart.btc,
      ethQty: this.props.ethCart.eth,
      iotaQty: this.props.iotaCart.iota,
      btcPrice: '11283.00',
      ethPrice: '379.58',
      iotaPrice: '0.33'
    };
  }
  onBtcInput = (e) => {
    const btcInput = e.target.value;
    if (btcInput === '') {
      this.setState(() => ({ btcQty: '' }));
      this.props.setBTC('');
    } else if (btcInput.match(/^\d{0,3}?$/)) {
      this.setState(() => ({ btcQty: btcInput }));
      this.props.setBTC(btcInput);
    }
  };
  onBtcIncrement = () => {
    if (this.state.btcQty === '') {
      this.setState(() => ({ btcQty: 1 }));
      this.props.incrementBTC();
    } else if (this.state.btcQty < 999) {
      this.setState((prevState) => ({
        btcQty: parseInt(prevState.btcQty) + 1
      }));
      this.props.incrementBTC();
    }
  };
  onBtcDecrement = () => {
    if (this.state.btcQty === 1) {
      this.setState(() => ({ btcQty: '' }));
      this.props.setBTC('');
    } else if (this.state.btcQty > 0) {
      this.setState((prevState) => ({
        btcQty: parseInt(prevState.btcQty) - 1
      }));
      this.props.decrementBTC();
    }
  };
  onEthInput = (e) => {
    const ethInput = e.target.value;
    if (ethInput === '') {
      this.setState(() => ({ ethQty: '' }));
      this.props.setETH('');
    } else if (ethInput.match(/^\d{0,3}?$/)) {
      this.setState(() => ({ ethQty: ethInput }));
      this.props.setETH(ethInput);
    }
  };
  onEthIncrement = () => {
    if (this.state.ethQty === '') {
      this.setState(() => ({ ethQty: 1 }));
      this.props.incrementETH();
    } else if (this.state.ethQty < 999) {
      this.setState((prevState) => ({
        ethQty: parseInt(prevState.ethQty) + 1
      }));
      this.props.incrementETH();
    }
  };
  onEthDecrement = () => {
    if (this.state.ethQty === 1) {
      this.setState(() => ({ ethQty: '' }));
      this.props.setETH('');
    } else if (this.state.ethQty > 0) {
      this.setState((prevState) => ({
        ethQty: parseInt(prevState.ethQty) - 1
      }));
      this.props.decrementETH();
    }
  };
  onIotaInput = (e) => {
    const iotaInput = e.target.value;
    if (iotaInput === '') {
      this.setState(() => ({ iotaQty: '' }));
      this.props.setIOTA('');
    } else if (iotaInput.match(/^\d{0,3}?$/)) {
      this.setState(() => ({ iotaQty: iotaInput }));
      this.props.setIOTA(iotaInput);
    }
  };
  onIotaIncrement = () => {
    if (this.state.iotaQty === '') {
      this.setState(() => ({ iotaQty: 1 }));
      this.props.incrementIOTA();
    } else if (this.state.iotaQty < 999) {
      this.setState((prevState) => ({
        iotaQty: parseInt(prevState.iotaQty) + 1
      }));
      this.props.incrementIOTA();
    }
  };
  onIotaDecrement = () => {
    if (this.state.iotaQty === 1) {
      this.setState(() => ({ iotaQty: '' }));
      this.props.setIOTA('');
    } else if (this.state.iotaQty > 0) {
      this.setState((prevState) => ({
        iotaQty: parseInt(prevState.iotaQty) - 1
      }));
      this.props.decrementIOTA();
    }
  };

  // Brave New Coin API down
  // componentWillMount() {
  //   const api = 'https://bravenewcoin-v1.p.rapidapi.com/convert?qty=1&from=';
  //   const apiKey = 'jFOb7XtsfimshjMy1yKo1eQpkgMQp11XOwCjsnMJiH1vy0hpq0';

  //   // Fetch BTC price
  //   fetch(`${api}btc&to=usd`, {
  //     headers: {
  //       'X-RapidAPI-Key': apiKey
  //     }
  //   })
  //     .then((response) => {
  //       if (response.status === 200) {
  //         return response.json();
  //       } else {
  //         throw new Error('Unable to fetch currency data');
  //       }
  //     })
  //     .then((data) => {
  //       // These setTimeouts are just to show off the loader =)
  //       setTimeout(() => {
  //         this.setState(() => ({ btcPrice: 999 }));
  //       }, 1500);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  //   // Fetch ETH price
  //   fetch(`${api}eth&to=usd`, {
  //     headers: {
  //       'X-RapidAPI-Key': apiKey
  //     }
  //   })
  //     .then((response) => {
  //       if (response.status === 200) {
  //         return response.json();
  //       } else {
  //         throw new Error('Unable to fetch currency data');
  //       }
  //     })
  //     .then((data) => {
  //       setTimeout(() => {
  //         this.setState(() => ({ ethPrice: 999 }));
  //       }, 1500);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  //   // Fetch IOTA price
  //   fetch(`${api}iota&to=usd`, {
  //     headers: {
  //       'X-RapidAPI-Key': apiKey
  //     }
  //   })
  //     .then((response) => {
  //       if (response.status === 200) {
  //         return response.json();
  //       } else {
  //         throw new Error('Unable to fetch currency data');
  //       }
  //     })
  //     .then((data) => {
  //       setTimeout(() => {
  //         this.setState(() => ({ iotaPrice: 999 }));
  //       }, 1500);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
  render() {
    return (
      <div className="coin-cart">
        {/* Show loader if fetch isn't complete */}
        {!this.state.btcPrice ||
        !this.state.ethPrice ||
        !this.state.iotaPrice ? (
          <div className="coin-cart-loader-box fade-in">
            <img
              src="./images/loader.svg"
              alt="loader"
              className="coin-cart-loader"
            />
          </div>
        ) : (
          <div className="coin-cart-selection fade-in">
            <div className="coin-cart__row">
              <div className="coin-cart__crypto-img-box">
                <img
                  src="./images/btc.png"
                  alt="bitcoin"
                  className="coin-cart__img"
                />
              </div>
              <div className="coin-cart__crypto-info">
                <p className="coin-cart__crypto-name">Bitcoin (BTC)</p>
                <p className="coin-cart__crypto-price">
                  {this.state.btcPrice
                    ? `$${this.state.btcPrice
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
                    : 'Loading'}
                </p>
              </div>
              <div className="coin-cart__input-box">
                <i
                  className="fas fa-minus coin-cart__math-btn"
                  onClick={this.onBtcDecrement}
                ></i>
                <input
                  type="text"
                  className="coin-cart__input"
                  onChange={this.onBtcInput}
                  value={this.state.btcQty}
                  placeholder="0"
                />
                <i
                  className="fas fa-plus coin-cart__math-btn"
                  onClick={this.onBtcIncrement}
                ></i>
              </div>
              <div className="coin-cart__line-total">
                <p className="coin-cart__line-total__number">
                  $
                  {(this.state.btcQty * this.state.btcPrice)
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </p>
              </div>
            </div>

            <div className="coin-cart__row">
              <div className="coin-cart__crypto-img-box">
                <img
                  src="./images/eth.png"
                  alt="ethereum"
                  className="coin-cart__img"
                />
              </div>
              <div className="coin-cart__crypto-info">
                <p className="coin-cart__crypto-name">Ethereum (ETH)</p>
                <p className="coin-cart__crypto-price">
                  {this.state.ethPrice
                    ? `$${this.state.ethPrice
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
                    : 'Loading'}
                </p>
              </div>
              <div className="coin-cart__input-box">
                <i
                  className="fas fa-minus coin-cart__math-btn"
                  onClick={this.onEthDecrement}
                ></i>
                <input
                  type="text"
                  className="coin-cart__input"
                  onChange={this.onEthInput}
                  value={this.state.ethQty}
                  placeholder="0"
                />
                <i
                  className="fas fa-plus coin-cart__math-btn"
                  onClick={this.onEthIncrement}
                ></i>
              </div>
              <div className="coin-cart__line-total">
                <p className="coin-cart__line-total__number">
                  $
                  {(this.state.ethQty * this.state.ethPrice)
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </p>
              </div>
            </div>

            <div className="coin-cart__row">
              <div className="coin-cart__crypto-img-box">
                <img
                  src="./images/miota.png"
                  alt="iota"
                  className="coin-cart__img"
                />
              </div>
              <div className="coin-cart__crypto-info">
                <p className="coin-cart__crypto-name">Iota (MIOTA)</p>
                <p className="coin-cart__crypto-price">
                  {this.state.iotaPrice
                    ? `$${this.state.iotaPrice
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
                    : 'Loading'}
                </p>
              </div>
              <div className="coin-cart__input-box">
                <i
                  className="fas fa-minus coin-cart__math-btn"
                  onClick={this.onIotaDecrement}
                ></i>
                <input
                  type="text"
                  className="coin-cart__input"
                  onChange={this.onIotaInput}
                  value={this.state.iotaQty}
                  placeholder="0"
                />
                <i
                  className="fas fa-plus coin-cart__math-btn"
                  onClick={this.onIotaIncrement}
                ></i>
              </div>
              <div className="coin-cart__line-total">
                <p className="coin-cart__line-total__number">
                  $
                  {(this.state.iotaQty * this.state.iotaPrice)
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </p>
              </div>
            </div>

            <div className="coin-cart__row coin-cart__row__subtotal">
              <div className="subtotal">
                <p className="subtotal__number">
                  <span className="subtotal">Subtotal: </span>
                  <span className="subtotal-number">
                    $
                    {(
                      this.state.btcQty * this.state.btcPrice +
                      this.state.ethQty * this.state.ethPrice +
                      this.state.iotaQty * this.state.iotaPrice
                    )
                      .toFixed(2)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}

        <Payment
          history={this.props.history}
          handleFormReset={this.handleFormReset}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  btcCart: state.btc,
  ethCart: state.eth,
  iotaCart: state.iota
});

const mapDispatchToProps = (dispatch) => ({
  incrementBTC: () => dispatch(incrementBTC()),
  decrementBTC: () => dispatch(decrementBTC()),
  setBTC: (amount) => dispatch(setBTC(amount)),
  incrementETH: () => dispatch(incrementETH()),
  decrementETH: () => dispatch(decrementETH()),
  setETH: (amount) => dispatch(setETH(amount)),
  incrementIOTA: () => dispatch(incrementIOTA()),
  decrementIOTA: () => dispatch(decrementIOTA()),
  setIOTA: (amount) => dispatch(setIOTA(amount))
});

export default connect(mapStateToProps, mapDispatchToProps)(CoinCart);
