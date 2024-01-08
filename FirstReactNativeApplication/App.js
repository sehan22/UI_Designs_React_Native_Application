import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomneStackNavigator from "./src/navigator/Navigation";

export default function App() {
  return (
    <NavigationContainer>
      <HomneStackNavigator />
    </NavigationContainer>
  );
}
