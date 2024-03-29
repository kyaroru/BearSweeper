// @flow

import React from 'react';

import {StyleSheet, View, Dimensions} from 'react-native';
import * as Colors from 'themes/colors';
import DifficultyChoiceButton from 'components/DifficultyChoiceButton';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: SCREEN_WIDTH * 0.7,
  },
});

const Difficulty = () => (
  <View style={styles.container}>
    <View style={styles.buttonContainer}>
      <DifficultyChoiceButton
        title="Easy"
        color={Colors.button}
        numberOfRow={8}
        numberOfColumn={8}
        numberOfMine={5}
      />
      <DifficultyChoiceButton
        title="Medium"
        color={Colors.button}
        numberOfRow={12}
        numberOfColumn={12}
        numberOfMine={15}
      />
      <DifficultyChoiceButton
        title="Hard"
        color={Colors.button}
        numberOfRow={16}
        numberOfColumn={16}
        numberOfMine={30}
      />
    </View>
  </View>
);

export default Difficulty;
