import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateList from "../screens/CreateList";
import SelectList from "../screens/SelectList";
import CheckList from "../screens/CheckList";
import Home from "../screens/Home";
import { DrawerProps } from "../types";

const Stack = createNativeStackNavigator();

const StackNavigation = (navigation: DrawerProps) => {
  const HomeComponent = (props) => (
    <Home DrawerNavigation={navigation} StackNavigation={props} />
  );

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeComponent}
        options={{ title: "Inicio", headerShown: false }}
      />
      <Stack.Screen
        name="CreateList"
        component={CreateList}
        options={{ title: "Crear lista" }}
      />
      <Stack.Screen
        name="SelectList"
        component={SelectList}
        options={{ title: "Seleccionar lista" }}
      />
      <Stack.Screen
        name="CheckList"
        component={CheckList}
        options={{ title: "Check List" }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
