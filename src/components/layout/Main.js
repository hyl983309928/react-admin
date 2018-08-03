import React, { Component } from 'react'
import MenuRouter from '@/router/index'
import { connect } from 'react-redux'
import {  withRouter } from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


class Main extends Component{
  render () {
    return (
      <section className={'layout-main'} style={{ marginLeft: this.props.sidebarOpen ? '200px' : '80px' }}>
        <div className={ 'padding-15' } style={{position: 'relative'}}>
          <ReactCSSTransitionGroup
            component="div"
            transitionName="transition-fade"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={100}
          >
            <div key={this.props.location.pathname}>
              <MenuRouter />
            </div>
          </ReactCSSTransitionGroup>
        </div>
      </section>
    )
  }
}

function mapState(state){
  return{
    sidebarOpen: state.App.sidebarOpen
  }
}

export default withRouter(connect(mapState)(Main))