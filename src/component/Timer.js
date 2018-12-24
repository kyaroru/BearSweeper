// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

class Timer extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    format: PropTypes.func.isRequired,
  };

  render() {
    return (
      <Text>
        {this.props.format(this.props.count)}
      </Text>
    );
  }
}

export default Timer;
