// @flow

import { connect } from 'react-redux';

import { Button } from 'react-native';

import {
  flag,
  sweep,
} from '../action/Game';

const mapStateToProps = state => ({
  title: ' ',
  disabled: state.game.isWon || state.game.isLose,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onPress: () => dispatch(sweep(ownProps.id)),
  onLongPress: () => dispatch(flag(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
