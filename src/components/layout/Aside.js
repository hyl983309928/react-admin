import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import routerConfig from '@/router/config.js'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class Aside extends Component{
  render () {
    let pathname = this.props.location.pathname
    let subMenu = routerConfig.menus.find((item) => pathname.indexOf(item.path) !== -1)
    let MenuComponent = () => (
      <Menu
        mode="inline"
        defaultSelectedKeys={[pathname]}
        defaultOpenKeys={[subMenu && this.props.sidebarOpen ? subMenu.path : '']}
        theme={'dark'}
        inlineCollapsed={!this.props.sidebarOpen}
      >
        {
          routerConfig.menus.map((item) => {
            let ChildrenMenu = ({ item, ...other }) => (
              item.hidden ? '' : (
                item.children && item.children.length > 0 ? (
                  <Menu.SubMenu key={item.path} title={<span><Icon type="mail" /><span>{item.meta.title}</span></span>} {...other}>
                    {
                      item.children.map((menuItem) => {
                        return (
                          <Menu.Item key={menuItem.path}>
                            <Link to={menuItem.path}>{menuItem.meta.title}</Link>
                          </Menu.Item>
                        )
                      })
                    }
                  </Menu.SubMenu>
                ) : (
                  <Menu.Item key={item.path} {...other}>
                    <Icon type="mail" />
                    <Link to={item.path}>{item.meta.title}</Link>
                  </Menu.Item>
                )
              )
            )
            return (
              <ChildrenMenu item={item} key={item.path}></ChildrenMenu>
            )
          })
        }
      </Menu>
    )
    return (
      <aside className={'layout-aside'} style={{ width: this.props.sidebarOpen?'200px':'80px' }}>
        {
          this.props.sidebarOpen ? (
            <div className="layout-aside-logo">
              <img src="/static/imgs/logo.jpg" alt={''} />
              <span>熊小秘AI电商机器人</span>
            </div>
          ) : (
            <div className="layout-aside-logo-small">
              <img src="/static/imgs/logo.jpg" alt={''} />
            </div>
          )
        }
        <div className={'layout-aside-menus'}>
          <MenuComponent></MenuComponent>
        </div>
      </aside>
    )
  }
}

function mapState(state){
  return{
    sidebarOpen: state.App.sidebarOpen
  }
}

export default withRouter(connect(mapState)(Aside))