import React from 'react';
import {Route,withRouter, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

//私有路由，只有登录的用户才能访问
class PrivateRoute extends React.Component{
  constructor () {
    super()
    this.state = {
      token: window.localStorage.getItem("token")
    }
  }
  render(){
    let { component: Component,path="/",exact=false,strict=false} = this.props;
    return this.state.token ?  (
      <Route  path={path} exact={exact}  strict={strict}  render={(props)=>( <Component {...props} /> )} />
    ) : <Redirect to={'/login'}></Redirect>;
  }
}
PrivateRoute.propTypes  ={
  path:PropTypes.string.isRequired,
  exact:PropTypes.bool,
  strict:PropTypes.bool,
  component:PropTypes.func.isRequired
}
export default withRouter(PrivateRoute);
