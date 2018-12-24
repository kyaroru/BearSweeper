// @flow

import { connect } from 'react-redux';

// import { Button } from 'react-native'
import Button from 'common/Button';
import { goToDifficulty } from '../action/Navigator';

const mapDispatchToProps = dispatch => ({
  onPress: () => dispatch(goToDifficulty()),
});

export default connect(null, mapDispatchToProps)(Button);
