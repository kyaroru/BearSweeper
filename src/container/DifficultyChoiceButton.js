// @flow

import { connect } from 'react-redux';

import Button from 'common/Button';
// import { Button } from 'react-native'

import { chooseDifficulty } from '../action/Game';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onPress: () => {
    dispatch(chooseDifficulty(
      {
        numberOfRow: ownProps.numberOfRow,
        numberOfColumn: ownProps.numberOfColumn,
        numberOfMine: ownProps.numberOfMine,
      },
    ));
  },
});

export default connect(null, mapDispatchToProps)(Button);
