import Home from 'containers/Home';
import Difficulty from 'containers/Difficulty';
import Game from 'containers/Game';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationService from './navigation-service';
import * as Colors from 'themes/colors';
import InformationIcon from 'components/common/InformationIcon';

const RootStack = createStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
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
};

export default AppContainer;
