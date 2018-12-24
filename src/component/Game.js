// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View, StyleSheet, Text, Dimensions, TouchableOpacity,
} from 'react-native';
import * as Colors from 'themes/colors';
import Timer from '../container/Timer';
import Tile from '../container/Tile';
import LeaderBoardModal from '../container/LeaderBoardModal';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  board: {
    flexDirection: 'row',
    width: SCREEN_WIDTH,
    height: SCREEN_WIDTH,
    padding: 10,
  },
  column: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
  },
  face: {
    fontSize: 40,
  },
});

class Game extends Component {
  static propTypes = {
    isLose: PropTypes.bool.isRequired,
    isWon: PropTypes.bool.isRequired,
    board: PropTypes.any.isRequired,
    newGame: PropTypes.func.isRequired,
    numberOfFlag: PropTypes.number.isRequired,
    numberOfMine: PropTypes.number.isRequired,
  }

  render() {
    const {
      isLose, newGame, isWon, numberOfMine, numberOfFlag, board,
    } = this.props;
    const smiley = () => {
      if (isLose) {
        return <TouchableOpacity onPress={newGame}><Text style={styles.face}>😭</Text></TouchableOpacity>;
      } if (isWon) {
        return <TouchableOpacity onPress={newGame}><Text style={styles.face}>😍</Text></TouchableOpacity>;
      }
      return <TouchableOpacity onPress={newGame}><Text style={styles.face}>😏</Text></TouchableOpacity>;
    };
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Timer isWon={isWon} isLose={isLose} />
            {smiley()}
            <Text>
              {numberOfFlag.toString()}
              {' '}
/
              {' '}
              {numberOfMine.toString()}
            </Text>
          </View>
          <View style={styles.board}>
            {
              board.map(row => (
                <View style={styles.column} key={board.indexOf(row)}>
                  {row.map(tile => <Tile key={tile.id.y} {...tile} />)}
                </View>
              ))
            }
          </View>
          <View style={styles.footer}>
            <Text>Enjoy BearSweeper !</Text>
          </View>
        </View>
        <LeaderBoardModal />
      </View>
    );
  }
}

export default Game;
