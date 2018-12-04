import React from 'react'
import CoinCart from './CoinCart'

const CartPage = () => (
  <div className="cart-page-wrapper">
    <div className="cart-page-header">
      <h2 className="cart-page-header__heading">Coin Cart</h2>
    </div>
    <CoinCart />
  </div>
)

export default CartPage