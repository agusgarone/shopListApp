import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateList from "../screens/CreateList";
import SelectList from "../screens/SelectList";
import CheckList from "../screens/CheckList";
import CreateProduct from "../screens/CreateProduct";
import Home from "../screens/Home";
import { DrawerProps } from "../types";
import * as SQLite from "expo-sqlite";
import CreateCategorie from "../screens/CreateCategorie";

const Stack = createNativeStackNavigator();

interface IStackNavigation {
  navigation: DrawerProps;
  db: SQLite.WebSQLDatabase;
}

const StackNavigation = ({ navigation, db }: IStackNavigation) => {
  const HomeComponent = (props) => (
    <Home DrawerNavigation={navigation} StackNavigation={props} />
  );

  const CreateProductComponent = (props) => (
    <CreateProduct
      DrawerNavigation={navigation}
      StackNavigation={props}
      db={db}
    />
  );

  const CreateCategorieComponent = (props) => (
    <CreateCategorie
      DrawerNavigation={navigation}
      StackNavigation={props}
      db={db}
    />
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
      <Stack.Screen
        name="CreateProduct"
        component={CreateProductComponent}
        options={{ title: "Create Product" }}
      />
      <Stack.Screen
        name="CreateCategorie"
        component={CreateCategorieComponent}
        options={{ title: "Create Categorie" }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
