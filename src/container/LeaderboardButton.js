// @flow

import { connect } from 'react-redux';

import { Button } from 'react-native';
import { goToLeaderboard } from '../action/Navigator';

const mapDispatchToProps = dispatch => ({
  onPress: () => dispatch(goToLeaderboard()),
});

export default connect(null, mapDispatchToProps)(Button);
