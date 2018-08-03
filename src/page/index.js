/**
 * 路由组件出口文件
 */
import React from 'react';
import Bundle from '@/components/Bundle'

export const Store = (props) => {
  return (
    <Bundle load={() => import('./user/Store')}>
      {(Component) => <Component {...props}/>}
    </Bundle>
  )
}

export const OneselfCenter = (props) => {
  return (
    <Bundle load={() => import('./user/OneselfCenter')}>
      {(Component) => <Component {...props}/>}
    </Bundle>
  )
}

export const DataInfo = (props) => {
  return (
    <Bundle load={() => import('./data/Info')}>
      {(Component) => <Component {...props}/>}
    </Bundle>
  )
}

export const Share = (props) => {
  return (
    <Bundle load={() => import('./data/share.tsx')}>
      {(Component) => <Component {...props}/>}
    </Bundle>
  )
}