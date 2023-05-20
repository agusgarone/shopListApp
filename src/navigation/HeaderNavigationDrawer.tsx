import React from "react";
import {
  DrawerContentComponentProps,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import StackNavigation from "./StackNavigation";
import Products from "../screens/Products";
import HeaderDrawer from "../components/HeaderDrawer";
import { Dimensions, StyleSheet } from "react-native";
import theme from "../theme";

const Drawer = createDrawerNavigator();

const HeaderComponent = (props: DrawerContentComponentProps) => {
  return <HeaderDrawer {...props} />;
};

const HeaderNavigationDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Stack"
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
      <Drawer.Screen name="Stack" component={StackNavigation} />
      <Drawer.Screen name="Notifications" component={Products} />
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
