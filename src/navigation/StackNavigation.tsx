import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CrearLista from "../screens/CrearLista";
import SeleccionarLista from "../screens/SeleccionarLista";
import CheckList from "../screens/CheckList";
import Home from "../screens/Home";
import { DrawerProps } from "../types";

const Stack = createNativeStackNavigator();

const StackNavigation = (navigation: DrawerProps) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={(props) =>
          Home({ StackNavigation: props, DrawerNavigation: navigation })
        }
        options={{ title: "Inicio", headerShown: false }}
      />
      <Stack.Screen
        name="CrearLista"
        component={CrearLista}
        options={{ title: "Crear lista" }}
      />
      <Stack.Screen
        name="SeleccionarLista"
        component={SeleccionarLista}
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
