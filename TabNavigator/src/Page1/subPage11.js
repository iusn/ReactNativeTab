import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Image
} from 'react-native';
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right
} from "native-base";

export  default class view0 extends  React.Component {
  static navigationOptions = {
        title: 'Page1',
        headerBackTitle: '返回',
        gesturesEnabled:true,
        tabBarLabel: 'Page1',
        tabBarIcon: ({ tintColor }) => (
          <Image source={require('../Tab/images/myOrder.png')}
          style={[styles.icon, {tintColor: tintColor}]}/>
        )
    };
  render () {
    return (
      <Container>
        <Text>
        subPage11
        </Text>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});
