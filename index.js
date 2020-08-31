/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/AppV';
import {name as appName} from './app.json';

import React from 'react';
import createStore from './src/stores';
import {Provider} from 'react-redux';

const {store} = createStore();

const Root = function() {
  return (
      <Provider store={store}>
        <App/>
      </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Root);
