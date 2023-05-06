import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home.jsx";
import CrearLista from "./CrearLista.jsx";
import SeleccionarLista from "./SeleccionarLista.jsx";

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Inicio" }}
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
    </Stack.Navigator>
  );
};

export default Main;
