import React from 'react'
import Login from "./page/user/login";
import App from "./page/App";
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'

export default class Page extends React.Component{
  componentDidMount () {
  }
  render () {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/login" component={Login} ></Route>
            <PrivateRoute path="/" component={App} exact></PrivateRoute>
            <Redirect to={'/'}></Redirect>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}