// @flow

import React from 'react';

import { getNavigationOptions } from 'utils/nav';
import * as Colors from 'themes/colors';
import Leaderboard from '../../component/Leaderboard';

const LeaderboardScene = () => <Leaderboard />;

LeaderboardScene.navigationOptions = getNavigationOptions('Leaderboard', Colors.primary, Colors.font);

export default LeaderboardScene;
