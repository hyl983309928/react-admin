import React from 'react';
export default class Header extends React.Component{
  constructor () {
    super()
    this.state = {
      isHeader: false
    }
  }
  swichHeader () {
    this.setState({
      isHeader: !this.state.isHeader
    })
  }
  render(){
    return (
      <header onClick={() => { this.swichHeader() }}>
        <h1>这里是头部</h1>
      </header>
    )
  }
}