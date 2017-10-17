import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import page11 from "./subPage11.js";
import page12 from "./subPage12.js";
const page1Router = StackNavigator(
  {
    page11: {screen: page11},
    page12: {screen: page12}
  }
)
export default page1Router;
