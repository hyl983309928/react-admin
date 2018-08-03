import React, { Component } from 'react'
import { Breadcrumb, Dropdown, Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom'
import { signOut, updateSidebarOpen } from '@/redux/action/index.js'
import routerConfig from '@/router/config.js'
import { connect } from 'react-redux'

class Header extends Component{
  state = {
    breadcrumbList: []
  }
  componentDidMount () {
  }
  handleBreadcrumbList (menus = routerConfig.menus) {
    let nowPath = this.props.location.pathname
    let breadcrumbItem = menus.find((item) => {
      return nowPath.indexOf(item.path) !== -1
    })
    if (breadcrumbItem) {
      this.breadcrumbList.push(breadcrumbItem)
      if (breadcrumbItem.children) {
        this.handleBreadcrumbList(breadcrumbItem.children)
      }
    }
  }
  signOut () {
    this.props.signOut()
    this.props.history.push('/login')
  }
  render () {
    this.breadcrumbList = []
    this.handleBreadcrumbList()
    const userDropdown = (
      <Menu>
        <Menu.Item>
          <Link to={'/app/user/store'}>我的店铺</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={'/app/user/oneselfCenter'}>个人中心</Link>
        </Menu.Item>
        <Menu.Item>
          <a onClick={() => {this.signOut()}}>退出</a>
        </Menu.Item>
      </Menu>
    )
    return (
      <header className={'layout-header'} style={{ left: this.props.sidebarOpen ? '200px' : '80px' }}>
        <div className={'layout-header-breadcrumb'}>
          <Icon type={ this.props.sidebarOpen ? 'menu-fold' : 'menu-unfold' }  style={{marginRight: '15px', marginTop: '2px', fontSize: '16px'}} className={'cursor-pointer'} onClick={this.props.updateSidebarOpen} />
          <Breadcrumb>
            <Breadcrumb.Item><Link to={'/app'}>首页</Link></Breadcrumb.Item>
            {
              this.breadcrumbList.map((item, index) => {
                return (
                  <Breadcrumb.Item key={item.path}>
                    {
                      index !== this.breadcrumbList.length - 1 ? (<Link to={item.path}>{item.meta.title}</Link>) : (item.meta.title)
                    }
                  </Breadcrumb.Item>
                )
              })
            }
          </Breadcrumb>
        </div>
        <div className={'layout-header-user'}>
          <Dropdown overlay={userDropdown}>
            <span>username<Icon type="down" /></span>
          </Dropdown>
        </div>
      </header>
    )
  }
}

function mapState(state){
  return{
    sidebarOpen: state.App.sidebarOpen
  }
}

function mapDispatch(dispatch){
  return {
    updateSidebarOpen: () => dispatch(updateSidebarOpen()),
    signOut: () => dispatch(signOut())
  }
}

export default withRouter(connect(mapState, mapDispatch)(Header))