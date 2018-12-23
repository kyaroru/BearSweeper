// @flow

import React from 'react'

import Difficulty from '../../component/Difficulty'
import { getNavigationOptions } from 'utils/nav';
import * as Colors from 'themes/colors';

const DifficultyScene = () =>
  <Difficulty />

DifficultyScene.navigationOptions = getNavigationOptions('Choose the difficulty', Colors.primary, Colors.font);

export default DifficultyScene
