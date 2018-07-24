import React from 'react';
import PropTypes from 'prop-types'

export default class Main extends React.Component{
  constructor (props) {
    super()
    this.state = { username: 'parry' }
  }
  componentDidMount () {
  }
  handleBtn () {
    this.setState({ username: '34123412' })
  }
  render(){
    return (
      <div>
        <p>{this.props.username}</p>
      </div>
    )
  }
}

Main.propTypes = {
  username: PropTypes.string
}
Main.defaultProps = {
  username: 'nihap'
}