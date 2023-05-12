import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HeaderDrawer from "../components/HeaderDrawer";
import { Dimensions, StyleSheet } from "react-native";
import theme from "../theme";
import Home from "../screens/Home";
import Products from "../screens/Products";

const Drawer = createDrawerNavigator();

const HeaderComponent = (props) => {
  return <HeaderDrawer {...props} />;
};

const HeaderNavigationDrawer = () => {
  return (
    <Drawer.Navigator
    // screenOptions={{
    //   headerShown: false,
    //   drawerStyle: {
    //     width: Dimensions.get("window").width / 1.7,
    //     backgroundColor: "#292929",
    //   },
    //   drawerItemStyle: styles.itemContent,
    //   drawerLabelStyle: styles.textContent,
    // }}
    // drawerContent={(props) => HeaderComponent(props)}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen
        name="Product"
        component={Products}
        options={{ drawerLabel: "Product" }}
      />
      {/* <Drawer.Screen
        name="Categorie"
        component={Products}
        options={{ drawerLabel: "Categorie" }}
      /> */}
    </Drawer.Navigator>
  );
};

// const styles = StyleSheet.create({
//   itemContent: {
//     marginTop: 10,
//     padding: 0,
//   },
//   textContent: {
//     color: "rgba(255, 255, 255, 0.9)",
//     // fontFamily: theme.font.principalMedium,
//     fontSize: theme.fontSize.body,
//     lineHeight: 16,
//   },
// });
export default HeaderNavigationDrawer;
