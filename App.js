import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import SignupLoginScreen from './Screens/SignupLoginScreen';
import HomeScreen from './Screens/HomeScreen';
import ExchangeScreen from './Screens/ExchangeScreen';
import SettingsScreen from './Screens/SettingsScreen';
import CustomSidebarMenu from './components/CustomSidebarMenu';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    ExchangeScreen: { screen: ExchangeScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        if (navigation.state.routeName === 'HomeScreen') {
          return (
            <Image
              source={require('./assets/home-icon.png')}
              style={{ width: 20, height: 20 }}
            />
          );
        } else if (navigation.state.routeName === 'ExchangeScreen') {
          return (
            <Image
              source={require('./assets/ads-icon.png')}
              style={{ width: 20, height: 20 }}
            />
          );
        }
      },
    }),
  }
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: { screen: TabNavigator },
    Settings: { screen: SettingsScreen },
  },
  { contentComponent: CustomSidebarMenu },
  { initalRouteName: 'Home' }
);

const SwitchNavigator = createSwitchNavigator({
  SignupLoginScreen: { screen: SignupLoginScreen },
  AppDrawerNavigator: { screen: AppDrawerNavigator },
});

const AppContainer = createAppContainer(SwitchNavigator);
