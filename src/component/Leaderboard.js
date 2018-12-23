// @flow

import React, { Component } from 'react'

import { StyleSheet, View, FlatList, Text } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})
const dataSample = {
  data: [
    { key: 0, name: 'toto', time: '15s' },
    { key: 1, name: 'pute', time: '12s' },
  ],
}

const renderItem = item =>
  <View style={styles.listItem}>
    <Text>{item.name}</Text>
    <Text>{item.time}</Text>
  </View>

const keyExtractor = (item) => `${item.key} ${item.name}`;

class Leaderboard extends Component {
  renderHeader = () =>
    <Text>Toto</Text>
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          listHeaderComponent={this.renderHeader}
          data={dataSample.data}
          keyExtractor={keyExtractor}
          renderItem={({ item }) => renderItem(item)}
        />
      </View>
    )
  }
}

export default Leaderboard
