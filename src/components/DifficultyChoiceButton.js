// @flow

import {connect} from 'react-redux';

import Button from './common/Button';

import {chooseDifficulty} from 'actions/Game';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onPress: () => {
    dispatch(
      chooseDifficulty({
        numberOfRow: ownProps.numberOfRow,
        numberOfColumn: ownProps.numberOfColumn,
        numberOfMine: ownProps.numberOfMine,
      }),
    );
  },
});

export default connect(null, mapDispatchToProps)(Button);
