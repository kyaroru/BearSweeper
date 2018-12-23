// @flow

import React from 'react'
import { connect } from 'react-redux'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import Home from './scene/Home'
import Difficulty from './scene/Difficulty'
import Game from './scene/Game'
import Leaderboard from './scene/Leaderboard'

const routeConfiguration = {
  Home: { screen: Home },
  Difficulty: { screen: Difficulty },
  Game: { screen: Game },
  Leaderboard: { screen: Leaderboard },
};

const AppNavigator = createStackNavigator(routeConfiguration);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;