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
        title: 'Home',
        headerBackTitle: '返回',
        gesturesEnabled:true,
        tabBarVisible:true,
        tabBarLabel: 'home',
        titleStyle: {
          color: '#fefefe',
          textAlign: 'center'
        },
        tabBarIcon: ({ tintColor }) => (
          <Image source={require('../Tab/images/homePage.png')}
          style={[styles.icon, {tintColor: tintColor}]}/>
        )
    };
  render () {
    return (
      <Container>
        <Text>
        subPage01
        </Text>
        <Button
            full
            rounded
            dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("page02")}
          >
          <Text>go To SubPage2</Text>
        </Button>
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
