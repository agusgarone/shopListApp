import { View, StyleSheet, SafeAreaView } from "react-native";
import StyledButton from "../components/StyledButton";
import Header from "../components/Header";
import { DrawerProps, StackProps } from "../types";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  buttonContainer: {
    marginBottom: 60,
    paddingHorizontal: 20,
  },
});

const Home = ({
  StackNavigation,
  DrawerNavigation,
}: {
  StackNavigation: StackProps;
  DrawerNavigation: DrawerProps;
}) => {
  const openDrawer = () => {
    DrawerNavigation.navigation.openDrawer();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header openDrawer={openDrawer} />
      <View style={styles.buttonContainer}>
        <StyledButton
          navigation={StackNavigation}
          to="SelectList"
          children={"Seleccionar lista"}
          color={"primary"}
          type="Navigate"
        />
        <StyledButton
          navigation={StackNavigation}
          to="CreateList"
          children={"Crear lista"}
          color={"secondary"}
          type="Navigate"
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
