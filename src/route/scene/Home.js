// @flow

import React from 'react';

import { getNavigationOptionsWithAction } from 'utils/nav';
import * as Colors from 'themes/colors';
import InformationIcon from 'common/InformationIcon';
import Home from '../../component/Home';

const HomeScene = () => <Home />;

HomeScene.navigationOptions = getNavigationOptionsWithAction('BearSweeper', Colors.primary, Colors.font, null, <InformationIcon />);

export default HomeScene;
