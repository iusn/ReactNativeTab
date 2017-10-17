import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import page01 from "./subPage01.js";
import page02 from "./subPage02.js";
const page0Router = StackNavigator(
  {
    page01: {screen: page01},
    page02: {screen: page02}
  }
)
export default page0Router;
