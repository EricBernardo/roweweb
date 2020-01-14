import React from 'react'

import { Switch } from 'react-router-dom'
import Route from './Route'

import SignIn from '../pages/SignIn'
import Category from '../pages/Category'
import Dashboard from '../pages/Dashboard'

export default function Routes() {
  return (
      <Switch>
        <Route path="/" exact component={SignIn} />

        <Route path="/dashboard" isPrivate component={Dashboard} />
        <Route path="/category" isPrivate component={Category} />

        <Route path="/" component={() => <h1>404</h1>} />
      </Switch>
  )
}
