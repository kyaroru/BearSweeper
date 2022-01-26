import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AppNavigationService from './AppNavigationService';
import Home from './scene/Home';
import Difficulty from './scene/Difficulty';
import Game from './scene/Game';
import * as Colors from 'themes/colors';
import InformationIcon from 'common/InformationIcon';

const RootStack = createStackNavigator();

class AppNavigator extends Component {
  render() {
    return (
      <NavigationContainer
        ref={navigatorRef => {
          AppNavigationService.setTopLevelNavigator(navigatorRef);
        }}>
        <RootStack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.primary,
            },
            headerShadowVisible: false,
            headerTintColor: Colors.font,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          }}>
          <RootStack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'BearSweeper',
              headerRight: () => <InformationIcon />,
            }}
          />
          <RootStack.Screen
            name="Difficulty"
            component={Difficulty}
            options={{
              title: 'Choose difficulty',
            }}
          />
          <RootStack.Screen
            name="Game"
            component={Game}
            options={{
              title: 'Sweep the Bear!',
            }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    );
  }
}

export default AppNavigator;
