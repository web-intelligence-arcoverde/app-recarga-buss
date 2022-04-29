import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from '../components/atoms/Icon';
import {COLORS} from '../constants';

import Home from '../screens/Home';
import SignIn from '../screens/SignIn/index';
import SignUp from '../screens/SignUp/index';

import Dashboard from '../screens/Dashboard';
import History from '../screens/History';
import Tariff from '../screens/Tariff';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="SignIn" component={SignIn} />
        <Drawer.Screen name="SignUp" component={SignUp} />
        <Drawer.Screen name="Dashboard" component={BottomNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

function BottomNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: COLORS['green-dark'],
          height: 64,
        },
      }}>
      <Tab.Screen
        name="Inicio"
        component={Dashboard}
        options={{
          tabBarIcon: () => <IconTabBottom icon="home-icon" label="Home" />,
        }}
      />
      <Tab.Screen
        name="Historico"
        component={History}
        options={{
          tabBarIcon: () => (
            <IconTabBottom icon="history-icon" label="historico" />
          ),
        }}
      />
      <Tab.Screen
        name="Tarifas"
        component={Tariff}
        options={{
          tabBarIcon: () => (
            <IconTabBottom icon="tariff-icon" label="tarifas" />
          ),
        }}
      />
      <Tab.Screen
        name="Sair"
        component={Dashboard}
        options={{
          tabBarIcon: () => <IconTabBottom icon="leave-icon" label="sair" />,
        }}
      />
    </Tab.Navigator>
  );
}

const IconTabBottom = ({icon, label}) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Icon icon={icon} />
      <Text
        style={{
          color: 'white',
          marginTop: 4,
          fontSize: 12,
          textTransform: 'capitalize',
        }}>
        {label}
      </Text>
    </View>
  );
};

export default Routes;
