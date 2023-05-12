import { View, StyleSheet, Text } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import theme from "../theme";

const HeaderDrawer = (props) => {
  return (
    <View style={styles.body}>
      <DrawerContentScrollView {...props}>
        <View style={styles.header}>
          <Text>Holaa</Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  header: {
    flex: 1,
    height: 64,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#6F6F6F",
  },
  headerImage: {
    height: 17,
    width: 115,
    marginLeft: 22,
  },
  textContainer: {
    justifyContent: "center",
    marginLeft: 18,
    marginTop: 15,
  },
  textContent: {
    color: "rgba(255, 255, 255, 0.9)",
    // fontFamily: theme.font.principalMedium,
    fontSize: theme.fontSize.body,
    lineHeight: 16,
  },
});
export default HeaderDrawer;
