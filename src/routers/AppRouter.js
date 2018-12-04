import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from '../components/HomePage'
import CartPage from '../components/CartPage'
import Navigation from '../components/Navigation'
import NotFoundPage from '../components/NotFoundPage'
import ThankYouPage from '../components/ThankYouPage'


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Navigation />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/cart" component={CartPage} />
        <Route path="/thankyou" component={ThankYouPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter