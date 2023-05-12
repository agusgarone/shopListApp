import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import HeaderNavigationDrawer from "../navigation/HeaderNavigationDrawer";
import CrearLista from "./CrearLista.jsx";
import SeleccionarLista from "./SeleccionarLista.jsx";
import CheckList from "./checkList.jsx";
import Home from "./Home";

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Inicio", headerShown: false }}
      />
      {/* <Stack.Screen
        name="Root"
        component={Root}
        options={{ headerShown: false }}
      /> */}
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

export default Main;
