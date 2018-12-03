import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from '../components/HomePage'
import CheckoutPage from '../components/CheckoutPage'
import ThankYouPage from '../components/ThankYouPage'
import NotFoundPage from '../components/NotFoundPage'


const AppRouter = () => (
  <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/thankyou" component={ThankYouPage} />
        <Route component={NotFoundPage} />
      </Switch>
  </BrowserRouter>
)

export default AppRouter