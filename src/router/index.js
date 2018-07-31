import React, { Component } from 'react'
import { Route, Switch, Redirect} from 'react-router-dom'
import * as pages from '@/page/index.js'
import router from './config'


export default class MenuRouter extends Component{
  render () {
    return (
      <Switch>
        {
          router.menus.map((menuItem) => {
            let reactid = 0
            const route = (r) => {
              const Component = pages[r.component]
              return (
                <Route path={r.path} component={Component} key={'route_' + reactid++} />
              )
            }
            return menuItem.component ? route(menuItem) : menuItem.children.map(r => route(r))
          })
        }
        <Route render={() => <Redirect to="/app/user/store" />} />
        {/*<Route path="/app/user" component={pages['Store']} />*/}
      </Switch>
    )
  }
}