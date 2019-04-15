import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1
    }
  }

  componentDidMount() {
    const { startCount } = this.props
    this.setState({
      count: startCount
    })
    this.doIntervalChange()
  }

  doIntervalChange = () => {
    this.myInterval = setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count - 1
      }))
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.myInterval)
  }

  render() {
    const { count } = this.state
    return (
      <h3>{count}</h3>
    );
  }
}

export default Timer;