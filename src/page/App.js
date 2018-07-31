import React, { Component } from 'react';
import Aside from '@/components/layout/Aside'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Main from '@/components/layout/Main'

class App extends Component {
  componentDidMount () {
  }
  render() {
    return (
      <div>
        <Aside></Aside>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;