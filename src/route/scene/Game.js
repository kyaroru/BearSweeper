// @flow

import React from 'react'

import Game from '../../container/Game'
import { getNavigationOptions } from 'utils/nav';
import * as Colors from 'themes/colors';

const GameScene = () =>
  <Game />

GameScene.navigationOptions = getNavigationOptions('Sweep the Bear!', Colors.primary, Colors.font);

export default GameScene
