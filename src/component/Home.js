// @flow

import React from 'react';

import {
  StyleSheet, View, Image, Dimensions, Text, Alert, TouchableOpacity,
} from 'react-native';

import * as Colors from 'themes/colors';
import PlayButton from '../container/PlayButton';
// import LeaderboardButton from '../container/LeaderboardButton';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: Colors.primary,
  },
  bear: {
    resizeMode: 'contain',
    width: SCREEN_WIDTH * 0.7,
    height: SCREEN_WIDTH * 0.7,
  },
  label: {
    textAlign: 'center',
    color: Colors.font,
    marginTop: 20,
  },
  top: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: SCREEN_WIDTH * 0.7,
  },
});

const images = {
  bear: require('images/bear-small2.png'),
};

const alert = () => Alert.alert('Ouch', 'Not tap on me :p');

const Home = () => (
  <View style={styles.container}>
    <View style={styles.top}>
      <TouchableOpacity onPress={alert}>
        <Image style={styles.bear} source={images.bear} />
      </TouchableOpacity>
      <Text style={styles.label}>Watch out for the Bear!</Text>
    </View>
    <View style={styles.bottom}>
      <View style={styles.buttonContainer}>
        <PlayButton title="Start" color={Colors.button} />
        {/* <LeaderboardButton title="Leaderboard"  color={Colors.button} /> */}
      </View>
    </View>
  </View>
);

export default Home;
