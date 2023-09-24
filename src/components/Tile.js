// @flow

import React, {Component, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Image,
  View,
} from 'react-native';
import * as Colors from 'themes/colors';
import BlinkView from './common/BlinkView';
import {connect} from 'react-redux';
import {Vibration} from 'react-native';
import {sweep, flag, unFlag} from 'actions/Game';

const styles = StyleSheet.create({
  button: {
    flex: 1,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
    // elevation: 4,
    borderRadius: 4,
  },
  bear: {
    resizeMode: 'contain',
    width: 40,
    height: 55,
  },
  bearImg: {
    width: '80%',
    height: '80%',
    alignSelf: 'center',
  },
  bearSpeech: {
    width: '100%',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderRadius: 5,
    paddingVertical: 2,
    marginBottom: 2,
    elevation: 5,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 7,
  },
  bearSpeechText: {
    fontSize: 6,
    textAlign: 'center',
  },
  flag: {
    textAlign: 'center',
    fontSize: 14,
  },
  blinking: {
    backgroundColor: Colors.primary,
    flex: 1,
    width: '100%',
    borderRadius: 4,
  },
});

const images = {
  bear: require('images/bear-small2.png'),
};

class Tile extends Component {
  static propTypes = {
    sweeped: PropTypes.bool.isRequired,
    flagued: PropTypes.bool,
    isMine: PropTypes.bool.isRequired,
    isLose: PropTypes.bool.isRequired,
    isWon: PropTypes.bool.isRequired,
    number: PropTypes.number.isRequired,
    onPress: PropTypes.func.isRequired,
    flagTile: PropTypes.func.isRequired,
    unFlagTile: PropTypes.func.isRequired,
    isHint: PropTypes.bool,
  };

  static defaultProps = {
    flagued: false,
    isHint: undefined,
  };

  render() {
    const color = () => {
      switch (this.props.number) {
        case 1:
          return 'blue';
        case 2:
          return 'green';
        case 3:
          return 'red';
        case 4:
          return 'darkblue';
        case 5:
          return 'brown';
        case 6:
          return 'cyan';
        case 7:
          return 'black';
        case 8:
          return 'grey';
        default:
          return 'black';
      }
    };
    const ScaleBear = props => {
      const scaleAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

      useEffect(() => {
        Animated.timing(scaleAnim, {
          toValue: 2.5,
          duration: 1000,
          useNativeDriver: false,
        }).start();
      }, [scaleAnim]);

      return (
        <Animated.View style={[styles.bear, {transform: [{scale: scaleAnim}]}]}>
          <View style={styles.bearSpeech}>
            <Text style={styles.bearSpeechText}>Grrrr !</Text>
          </View>
          <Image style={[styles.bearImg]} source={images.bear} />
        </Animated.View>
      );
    };

    const tile = () => {
      if (this.props.sweeped) {
        if (this.props.isMine) {
          // return <IconMaterialCommunity style={styles.text} name="bomb" />
          return (
            // <Image style={[styles.bear]} source={images.bear} />
            <ScaleBear />
          );
        }
        if (this.props.number > 0) {
          return (
            <Text style={{textAlign: 'center', color: color()}}>
              {this.props.number.toString()}
            </Text>
          );
        }
        return null;
      }
      if (this.props.flagued) {
        // return <IconFoundation style={styles.text} name="flag" />;
        return <Text style={styles.flag}>⛳</Text>;
      }
      return null;
    };
    const backgroundColor = () => {
      if (!this.props.sweeped) {
        return {backgroundColor: Colors.unsweep};
      }
      if (this.props.sweeped && this.props.isMine) {
        return {backgroundColor: Colors.mine};
      }
      return {backgroundColor: Colors.sweep};
    };
    return (
      <TouchableOpacity
        style={[
          styles.button,
          backgroundColor(),
          this.props.isMine &&
            this.props.sweeped && {elevation: 20, zIndex: 20},
        ]}
        onPress={this.props.flagued ? null : this.props.onPress}
        onLongPress={
          this.props.isHint
            ? () => {}
            : this.props.flagued
            ? this.props.unFlagTile
            : this.props.flagTile
        }
        disabled={this.props.isLose || this.props.isWon}>
        {tile()}
        {this.props.isHint && (
          <BlinkView style={styles.blinking} blinking delay={500} />
        )}
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  isWon: state.game.isWon,
  isLose: state.game.isLose,
  sweeped: state.game.board[ownProps.id.x][ownProps.id.y].sweeped,
  flagued: state.game.board[ownProps.id.x][ownProps.id.y].flagued,
  isHint: state.game.board[ownProps.id.x][ownProps.id.y].isHint,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onPress: () => {
    dispatch(sweep(ownProps.id));
  },
  flagTile: () => {
    dispatch(flag(ownProps.id));
    Vibration.vibrate(100);
  },
  unFlagTile: () => {
    dispatch(unFlag(ownProps.id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Tile);
