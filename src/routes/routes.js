import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import Home from '../screens/Home';
import SignIn from '../screens/SignIn/index';

const Drawer = createDrawerNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="SignIn" component={SignIn} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
