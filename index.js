import React from 'react';

import {AppRegistry} from 'react-native';
import Index from './App';
import {name as appName} from './app.json';

import {Provider} from 'react-redux';
import store from './src/store';

import {enableES5} from 'immer';

const App = () => {
  return (
    <Provider store={store}>
      {enableES5()}
      <Index />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => App);
