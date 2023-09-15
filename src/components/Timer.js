// @flow

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';
import {connect} from 'react-redux';

class Timer extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    format: PropTypes.func.isRequired,
  };

  render() {
    return <Text>{this.props.format(this.props.count)}</Text>;
  }
}

const mapStateToProps = state => ({
  count: state.timer.count,
  isStarted: state.timer.isStarted,
});

const mapDispatchToProps = () => ({
  format: timer => {
    const date = new Date(1970, 0, 1);
    date.setSeconds(timer);
    return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
