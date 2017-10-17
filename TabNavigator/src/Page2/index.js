import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import page21 from "./subPage21.js";
import page22 from "./subPage22.js";
const page1Router = StackNavigator(
  {
    page21: {screen: page21},
    page22: {screen: page22}
  }
)
export default page1Router;
