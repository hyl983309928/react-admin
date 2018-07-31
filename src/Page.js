import React from 'react'
import Login from "./page/user/Login";
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
            <Route path="/login" component={Login}></Route>
            <Route exact path="/" render={() => <Redirect to="/app" push />} />
            <PrivateRoute path="/app" component={App}></PrivateRoute>
            <Redirect to={'/'}></Redirect>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}