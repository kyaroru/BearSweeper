// @flow

import React from 'react'

import Leaderboard from '../../component/Leaderboard'
import { getNavigationOptions } from 'utils/nav';
import * as Colors from 'themes/colors';

const LeaderboardScene = () =>
  <Leaderboard />

LeaderboardScene.navigationOptions = getNavigationOptions('Leaderboard', Colors.primary, Colors.font);

export default LeaderboardScene
