import React from 'react';
import { AppRegistry } from 'react-native';

import { createBrowserApp } from '../react-navigation-web';

import App from './Website';

const AppWithNavigation = createBrowserApp(App);

AppRegistry.registerComponent('App', () => AppWithNavigation);

AppRegistry.runApplication('App', {
  initialProps: {},
  rootTag: document.getElementById('root'),
});

if (module.hot) {
  module.hot.accept();
}
