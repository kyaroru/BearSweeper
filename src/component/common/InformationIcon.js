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

const alert = () => Alert.alert('Hello there', 'Welcome to BearSweeper! Just play it like how you play Minesweeper :p \n\nInstructions: \n- Tap to reveal\n- Long Tap to Flag ⛳\n- Tap emoji to restart\n\nGame Status:\n- Ongoing (😏)\n- Win (😍)\n- Lose (😭)');

const InformationIcon = () => (
  <TouchableOpacity style={styles.container} onPress={alert}>
    <Icon style={styles.informationIcon} name="info-circle" size={25} />
  </TouchableOpacity>
);

export default InformationIcon;
