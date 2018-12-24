// @flow

import React from 'react';

import { getNavigationOptions } from 'utils/nav';
import * as Colors from 'themes/colors';
import Home from '../../component/Home';

const HomeScene = () => <Home />;

HomeScene.navigationOptions = getNavigationOptions('BearSweeper', Colors.primary, Colors.font);

export default HomeScene;
