// @flow

import React from 'react';

import { getNavigationOptions } from 'utils/nav';
import * as Colors from 'themes/colors';
import Difficulty from '../../component/Difficulty';

const DifficultyScene = () => <Difficulty />;

DifficultyScene.navigationOptions = getNavigationOptions('Choose the difficulty', Colors.primary, Colors.font);

export default DifficultyScene;
