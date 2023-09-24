// @flow

import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, TouchableOpacity, Text,
} from 'react-native';
import * as Colors from 'themes/colors';


const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    borderColor: Colors.mine,
    backgroundColor: Colors.mine,
    margin: 10,
  },
  title: {
    color: Colors.white,
  },
});

const Button = ({ onPress, title }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Button;
