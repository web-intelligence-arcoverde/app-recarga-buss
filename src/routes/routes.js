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
import SignOut from '../screens/SignOut';

import Dashboard from '../screens/Dashboard';
import History from '../screens/PurchasePass';
import Tariff from '../screens/Tariff';

import {useDispatch} from 'react-redux';
import {openModalSignOut} from '../store/modules/navigation/actions';

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
  const disaptch = useDispatch();

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
            <IconTabBottom icon="history-icon" label="recarga" />
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
        component={SignOut}
        options={{
          tabBarIcon: (props) => (
            <IconTabBottom icon="leave-icon" label="sair" />
          ),
        }}
        listeners={({navigation}) => ({
          tabPress: (e) => {
            e.preventDefault();
            disaptch(openModalSignOut());
          },
        })}
      />
    </Tab.Navigator>
  );
}

const openModal = () => {
  return null;
};

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
