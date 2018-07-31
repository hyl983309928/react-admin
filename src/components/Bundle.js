import React from 'react'

export default class Bundle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mod: null
    }
  }

  componentWillMount() {
    this.load(this.props)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.load !== this.props.load) {
      this.load(this.props)
    }
  }

  load(props) {
    this.setState({
      mod: null
    })
    props.load().then((mod) => {
      this.setState({
        mod: mod.default ? mod.default : mod
      });
    });
  }

  render() {
    return this.state.mod ? this.props.children(this.state.mod) : null
  }
}