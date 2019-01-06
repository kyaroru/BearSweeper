// @flow

import React from 'react';
import {
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import * as Colors from 'themes/colors';
import Icon from 'react-native-vector-icons/FontAwesome';


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  informationIcon: {
    color: Colors.mine,
  },
});

const alert = () => Alert.alert('Hello there', 'Welcome to BearSweeper! This game was built using React Native & it is open sourced 😍\n\nAuthor: Chiew Carol\nGithub: https://github.com/kyaroru/BearSweeper');

const InformationIcon = () => (
  <TouchableOpacity style={styles.container} onPress={alert}>
    <Icon style={styles.informationIcon} name="info-circle" size={25} />
  </TouchableOpacity>
);

export default InformationIcon;
