// @flow

import { connect } from 'react-redux';

import Button from 'react-native-vector-icons/MaterialCommunityIcons';


const mapStateToProps = () => ({
  name: 'bomb',
  disabled: true,
});

export default connect(mapStateToProps)(Button);
