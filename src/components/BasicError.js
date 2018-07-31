import React, { Component } from 'react'

export default class BasicError extends Component{
  render () {
    return (
      <div className="basic-error-label">
        { this.props.show &&
          <span>
            {this.props.errorMsg}
          </span>
        }
      </div>
    )
  }
}