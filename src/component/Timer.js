// @flow

import React, { Component } from 'react'
import { Text } from 'react-native'

class Timer extends Component {
  props: {
    count: number,
    format: Function,
  }
  render() {
    return (
      <Text>
        {this.props.format(this.props.count)}
      </Text>
    )
  }
}

export default Timer
