// @flow

import React from 'react'

import Home from '../../component/Home'
import { getNavigationOptions } from 'utils/nav';
import * as Colors from 'themes/colors';

const HomeScene = () =>
  <Home />

HomeScene.navigationOptions = getNavigationOptions('BearSweeper', Colors.primary, Colors.font);

export default HomeScene
