import React, { Component } from 'react'
import styleLogin from './login.scss'
import { Button } from 'antd'
import { connect } from 'react-redux'
import { updateToken } from '@/redux/action'
import API from '@/api/api.js'

class Login extends Component{
  componentDidMount () {
    API.user.login('idbear', 'guxiong2430')
  }
  render () {
    return (
      <div>
        <header className={styleLogin["page-header"]}>
          <div className={styleLogin["header-logo"]}>
            <img src="/static/imgs/logo.jpg" alt={''} />
            <span>熊小秘智能店小二</span>
          </div>
          <div className={styleLogin["header-user"]}>
            <Button type="primary">登入</Button>
          </div>
        </header>
      </div>
    )
  }
}


const mapStateToProps = (state, props) => {
  return {
    token: state.App.token
  }
}
const mapDispatchToProps = {
  updateToken
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)