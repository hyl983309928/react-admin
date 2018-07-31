/**
 * 路由组件出口文件
 */
import React from 'react';
import Bundle from '@/components/Bundle'

export const Store = (props) => {
  return (
    <Bundle load={() => import('@/page/user/Store')}>
      {(Component) => <Component {...props}/>}
    </Bundle>
  )
}

export const OneselfCenter = (props) => {
  return (
    <Bundle load={() => import('@/page/user/OneselfCenter')}>
      {(Component) => <Component {...props}/>}
    </Bundle>
  )
}