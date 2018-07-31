import React, { Component } from 'react'
import MenuRouter from '@/router/index'

export default class Aside extends Component{
  render () {
    return (
      <section className={'layout-main'}>
        <MenuRouter/>
      </section>
    )
  }
}