// @flow

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import * as Colors from 'themes/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';
import {newGame, getHints, clearHints} from 'actions/Game';
import {timerReset, timerStop} from 'actions/Timer';
import Timer from 'components/Timer';
import Tile from 'components/Tile';
import SuccessModal from 'components/SuccessModal';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

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
    marginTop: 'auto',
    marginBottom: 20,
  },
  face: {
    fontSize: 40,
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
  hint: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.button,
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
  };

  onInfoPress = () =>
    Alert.alert(
      'Instructions',
      '- Tap to reveal\n- Long Tap to Flag ⛳\n- Tap emoji to restart\n- Tap the 💡 icon to get hint\n\nGame Status:\n- Ongoing (😏)\n- Win (😍)\n- Lose (😭)',
    );

  getHintButton = () => {
    const {isHinted, isLose, isWon} = this.props;
    if (isHinted || isLose || isWon) {
      return {
        position: 'absolute',
        backgroundColor: Colors.modalBg,
        width: 30,
        height: 30,
        zIndex: 1,
        padding: 5,
        borderRadius: 15,
      };
    }
    return null;
  };

  render() {
    const {isLose, newGame, isWon, numberOfMine, numberOfFlag, board} =
      this.props;
    const smiley = () => {
      if (isLose) {
        return (
          <TouchableOpacity onPress={newGame}>
            <Text style={styles.face}>😭</Text>
          </TouchableOpacity>
        );
      }
      if (isWon) {
        return (
          <TouchableOpacity onPress={newGame}>
            <Text style={styles.face}>😍</Text>
          </TouchableOpacity>
        );
      }
      return (
        <TouchableOpacity onPress={newGame}>
          <Text style={styles.face}>😏</Text>
        </TouchableOpacity>
      );
    };
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={this.onInfoPress}>
              <View style={styles.info}>
                <Icon name="info" size={15} color={Colors.mine} />
              </View>
            </TouchableOpacity>
            <Timer isWon={isWon} isLose={isLose} />
            {smiley()}
            <Text>
              {numberOfFlag.toString()} / {numberOfMine.toString()}
            </Text>
            <TouchableOpacity
              onPress={this.props.onHintPress}
              disabled={
                this.props.isWon || this.props.isHinted || this.props.isLose
              }>
              <View style={styles.hint}>
                <MaterialIcons
                  name="lightbulb"
                  size={15}
                  color={Colors.button}
                />
              </View>
              <View style={this.getHintButton()} />
            </TouchableOpacity>
          </View>
          <View style={styles.board}>
            {board.map((row, index) => {
              const found = row.find(tile => tile.isMine && tile.sweeped);
              const rowIndexWithMine = found?.id?.x || null;
              const zIn = index === rowIndexWithMine ? 100 : 1;
              // console.log(
              //   `rowIndexWithMine: ${rowIndexWithMine}, zIndex for ${index} is : ${zIn}`,
              // );

              return (
                <View
                  style={[
                    styles.column,
                    {
                      zIndex: zIn,
                      elevation: zIn,
                    },
                  ]}
                  key={board.indexOf(row)}>
                  {row.map(tile => (
                    <Tile key={tile.id.y} {...tile} />
                  ))}
                </View>
              );
            })}
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

const mapStateToProps = state => ({
  board: state.game.board,
  isLose: state.game.isLose,
  isWon: state.game.isWon,
  isHinted: state.game.isHinted,
  numberOfFlag: state.game.numberOfFlag,
  numberOfMine: state.game.numberOfMine,
});

const mapDispatchToProps = dispatch => ({
  newGame: () => {
    dispatch(newGame());
    dispatch(timerStop());
    dispatch(timerReset());
    dispatch(clearHints());
  },
  onHintPress: () => {
    dispatch(getHints());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
