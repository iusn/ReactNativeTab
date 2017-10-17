/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import AppRouter from "./src/Tab/index.js";
export default class App extends React.Component {
  render () {
    return (
      <AppRouter/>
    );
  }
}
