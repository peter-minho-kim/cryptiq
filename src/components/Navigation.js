import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => (
  <div className="nav-wrapper">
    <nav className="nav">
      <NavLink to="/" className="nav__link" activeClassName="is-active">Crypt<span className="u-brand-iq">IQ</span></NavLink>
      <NavLink to="/cart" className="nav__link" activeClassName="is-active">Buy Coins</NavLink>
    </nav>
  </div>
)

export default Navigation