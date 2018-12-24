// @flow

import React from 'react';

import { getNavigationOptions } from 'utils/nav';
import * as Colors from 'themes/colors';
import Game from '../../container/Game';

const GameScene = () => <Game />;

GameScene.navigationOptions = getNavigationOptions('Sweep the Bear!', Colors.primary, Colors.font);

export default GameScene;
