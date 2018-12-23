// @flow

import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons'
import IconFoundation from 'react-native-vector-icons/Foundation'
import * as Colors from 'themes/colors';

const styles = StyleSheet.create({
  button: {
    flex: 1,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'stretch',
    elevation: 4,
    borderRadius: 4,
  },
  text: {
    textAlign: 'center',
  },
})

class Tile extends Component {
  static defaultProps = {
    flagued: false,
  }
  props: {
    sweeped: boolean,
    flagued: boolean,
    isMine: boolean,
    isLose: boolean,
    isWon: boolean,
    number: number,
    onPress: Function,
    flagTile: Function,
    unFlagTile: Function,
  }
  render() {
    const color = () => {
      switch (this.props.number) {
        case 1:
          return 'blue'
        case 2:
          return 'green'
        case 3:
          return 'red'
        case 4:
          return 'darkblue'
        case 5:
          return 'brown'
        case 6:
          return 'cyan'
        case 7:
          return 'black'
        case 8:
          return 'grey'
        default:
          return 'black'
      }
    }
    const tile = () => {
      if (this.props.sweeped) {
        if (this.props.isMine) {
          return <IconMaterialCommunity style={styles.text} name="bomb" />
        }
        return (
          <Text style={{ textAlign: 'center', color: color() }}>
            {this.props.number.toString()}
          </Text>
        )
      }
      if (this.props.flagued) {
        return <IconFoundation style={styles.text} name="flag" />
      }
      return null
    }
    const backgroundColor = () => {
      if (!this.props.sweeped) {
        return { backgroundColor: Colors.sweep};
      }
      if (this.props.sweeped && this.props.isMine) {
        return { backgroundColor: Colors.mine};
      }
      return { backgroundColor: Colors.unsweep};
    }
    return (
      <TouchableOpacity
        style={[styles.button, backgroundColor()]}
        onPress={this.props.flagued ? null : this.props.onPress}
        onLongPress={this.props.flagued ? this.props.unFlagTile : this.props.flagTile}
        disabled={this.props.sweeped || this.props.isLose || this.props.isWon}
      >
        {tile()}
      </TouchableOpacity>
    )
  }
}


export default Tile
