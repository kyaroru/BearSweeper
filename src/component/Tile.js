// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text, StyleSheet, TouchableOpacity, Image,
} from 'react-native';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFoundation from 'react-native-vector-icons/Foundation';
import * as Colors from 'themes/colors';

const styles = StyleSheet.create({
  button: {
    flex: 1,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    borderRadius: 4,
  },
  text: {
    textAlign: 'center',
  },
  bear: {
    resizeMode: 'contain',
    width: '80%',
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
  };

  static defaultProps = {
    flagued: false,
  }

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
    const tile = () => {
      if (this.props.sweeped) {
        if (this.props.isMine) {
          // return <IconMaterialCommunity style={styles.text} name="bomb" />
          return <Image style={styles.bear} source={images.bear} />;
        }
        if (this.props.number > 0) {
          return (
            <Text style={{ textAlign: 'center', color: color() }}>
              {this.props.number.toString()}
            </Text>
          );
        }
        return null;
      }
      if (this.props.flagued) {
        return <IconFoundation style={styles.text} name="flag" />;
      }
      return null;
    };
    const backgroundColor = () => {
      if (!this.props.sweeped) {
        return { backgroundColor: Colors.unsweep };
      }
      if (this.props.sweeped && this.props.isMine) {
        return { backgroundColor: Colors.mine };
      }
      return { backgroundColor: Colors.sweep };
    };
    return (
      <TouchableOpacity
        style={[styles.button, backgroundColor()]}
        onPress={this.props.flagued ? null : this.props.onPress}
        onLongPress={this.props.flagued ? this.props.unFlagTile : this.props.flagTile}
        disabled={this.props.sweeped || this.props.isLose || this.props.isWon}
      >
        {tile()}
      </TouchableOpacity>
    );
  }
}

export default Tile;
