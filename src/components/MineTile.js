// @flow

import { connect } from 'react-redux';

import {MaterialDesignIcons as Button} from '@react-native-vector-icons/material-design-icons';


const mapStateToProps = () => ({
  name: 'bomb',
  disabled: true,
});

export default connect(mapStateToProps)(Button);
