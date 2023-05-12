import React from "react";
import Main from "./src/screens/Main";
// import HeaderNavigationDrawer from "./src/navigation/HeaderNavigationDrawer";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Main />
      </GestureHandlerRootView>
      {/* <HeaderNavigationDrawer /> */}
    </NavigationContainer>
  );
}
