// @flow

import React from 'react';
import {StyleSheet, Alert, TouchableOpacity, View} from 'react-native';
import * as Colors from 'themes/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  info: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.mine,
    width: 30,
    height: 30,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});

const alert = () =>
  Alert.alert(
    'Hello there',
    'Welcome to BearSweeper! This game was built using React Native & it is open sourced 😍\n\nAuthor: Chiew Carol\nGithub: https://github.com/kyaroru/BearSweeper',
  );

const InformationIcon = () => (
  <TouchableOpacity style={styles.container} onPress={alert}>
    <View style={styles.info}>
      <Icon name="info" size={15} color={Colors.mine} />
    </View>
  </TouchableOpacity>
);

export default InformationIcon;
