// @flow

import {connect} from 'react-redux';

import Button from './common/Button';
import {goToDifficulty} from 'actions/Navigator';

const mapDispatchToProps = dispatch => ({
  onPress: () => dispatch(goToDifficulty()),
});

export default connect(null, mapDispatchToProps)(Button);
