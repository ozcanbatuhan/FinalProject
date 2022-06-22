/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Route from './src/Router';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Route);
