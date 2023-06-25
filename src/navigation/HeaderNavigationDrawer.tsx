import React, { useEffect, useState } from "react";
import {
  DrawerContentComponentProps,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import StackNavigation from "./StackNavigation";
import Products from "../screens/Products";
import HeaderDrawer from "../components/HeaderDrawer";
import { Dimensions, StyleSheet } from "react-native";
import theme from "../theme";

import * as SQLite from "expo-sqlite";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";

const Drawer = createDrawerNavigator();

const HeaderComponent = (props: DrawerContentComponentProps) => {
  return <HeaderDrawer {...props} />;
};

const HeaderNavigationDrawer = () => {
  const db = SQLite.openDatabase("example.db");
  const [existDB, setExistDB] = useState<boolean>(false);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS categorias (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)",
        null,
        () => {
          console.log("TABLA categorias fue creada"), setExistDB(true);
        },
        (transaction, error) => {
          console.log("error", transaction, error);
          return true;
        }
      );
    });
  }, []);

  const getDB = async () => {
    console.log("base de datos", FileSystem.documentDirectory);
    await Sharing.shareAsync(
      FileSystem.documentDirectory + "SQLite/example.db"
    ).catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    if (existDB) {
      // getDB();
    }
  }, [existDB]);

  const CreateProductComponent = (props) => (
    <Products db={db} navigation={props} />
  );

  const StackNavigationComponent = (props) => (
    <StackNavigation db={db} navigation={props} />
  );

  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: Dimensions.get("window").width / 1.7,
          backgroundColor: "#292929",
        },
        drawerItemStyle: styles.itemContent,
        drawerLabelStyle: styles.textContent,
        drawerActiveBackgroundColor: theme.colors.primary,
      }}
      drawerContent={(props) => HeaderComponent(props)}
    >
      <Drawer.Screen name="Dashboard" component={StackNavigationComponent} />
      <Drawer.Screen name="Products" component={CreateProductComponent} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  itemContent: {
    marginTop: 10,
    padding: 0,
  },
  textContent: {
    color: theme.colors.tertiary,
    fontSize: theme.fontSize.body,
    lineHeight: 16,
  },
});

export default HeaderNavigationDrawer;
