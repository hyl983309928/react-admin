import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import routerConfig from '@/router/config.js'
import { Link, withRouter } from 'react-router-dom'

class Aside extends Component{
  render () {
    let pathname = this.props.location.pathname
    let subMenu = routerConfig.menus.find((item) => pathname.indexOf(item.path) !== -1)
    let MenuComponent = () => (
      <Menu
        mode="inline"
        defaultSelectedKeys={[pathname]}
        defaultOpenKeys={[subMenu ? subMenu.path : '']}
        theme={'dark'}
      >
        {
          routerConfig.menus.map((item) => {
            let ChildrenMenu = ({ item, ...other }) => (
              item.children && item.children.length > 1 ? (
                <Menu.SubMenu key={item.path} title={<span><Icon type="mail" />{item.meta.title}</span>} {...other}>
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
                  <Link to={item.path}>{item.meta.title}</Link>
                </Menu.Item>
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
      <aside className={'layout-aside'}>
        <div className="layout-aside-logo">
          <img src="/static/imgs/logo.jpg" alt={''} />
          <span>熊小秘AI电商机器人</span>
        </div>
        <div className={'layout-aside-menus'}>
          <MenuComponent></MenuComponent>
        </div>
      </aside>
    )
  }
}

export default withRouter(Aside)