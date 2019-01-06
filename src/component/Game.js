// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View, StyleSheet, Text, Dimensions, TouchableOpacity, Alert,
} from 'react-native';
import * as Colors from 'themes/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import Timer from '../container/Timer';
import Tile from '../container/Tile';
import SuccessModal from '../container/SuccessModal';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  hint: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.unsweep,
    width: 30,
    height: 30,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  informationIcon: {
    color: Colors.mine,
    padding: 5,
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

  onInfoPress = () => Alert.alert('Instructions', '- Tap to reveal\n- Long Tap to Flag ⛳\n- Tap emoji to restart\n- Tap the 💡 icon to get hint\n\nGame Status:\n- Ongoing (😏)\n- Win (😍)\n- Lose (😭)');

  getHintButton = () => {
    const { isHinted, isLose, isWon } = this.props;
    if (isHinted || isLose || isWon) {
      return {
        position: 'absolute',
        backgroundColor: Colors.modalBg,
        width: 30,
        height: 30,
        zIndex: 1,
        padding: 5,
        borderRadius: 10,
      };
    }
    return null;
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
            <TouchableOpacity onPress={this.onInfoPress}>
              <Icon style={styles.informationIcon} name="info-circle" size={25} />
            </TouchableOpacity>
            <Timer isWon={isWon} isLose={isLose} />
            {smiley()}
            <Text>
              {numberOfFlag.toString()}
              {' '}
/
              {' '}
              {numberOfMine.toString()}
            </Text>
            <TouchableOpacity onPress={this.props.onHintPress} disabled={this.props.isWon || this.props.isHinted || this.props.isLose}>
              <Text style={styles.hint}>💡</Text>
              <View style={this.getHintButton()} />
            </TouchableOpacity>
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
        <SuccessModal />
      </View>
    );
  }
}

export default Game;
