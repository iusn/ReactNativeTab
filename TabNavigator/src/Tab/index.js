import React, { Component, Image } from "react";
// import view0 from "../Views/view0.js"
import page0 from "../Page0/index.js"
import page1 from "../Page1/index.js"
import page2 from "../Page2/index.js"
import { TabNavigator } from "react-navigation";

export default (MainScreenNavigator = TabNavigator(
  {
    view0: { screen: page0 },
    page1: { screen: page1 },
    page2: { screen: page2 }
  },
  {
    tabBarPosition: "bottom",
    animationEnabled: false,
    tabBarOptions: {
      activeTintColor: '#e91e63',
    }
  }
));
