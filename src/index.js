import React from 'react'
import ReactDOM from 'react-dom'

import Page from './Page.js';
import { Provider } from 'react-redux';
import store from './redux/store'
import './style/index.scss'


export default class Root extends React.Component{
  render () {
    return (
      <Provider store={store}>
        <Page></Page>
      </Provider>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));