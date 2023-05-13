import { View, StyleSheet, SafeAreaView } from "react-native";
import StyledButton from "../components/StyledButton";
import Header from "../components/Header";
import { useEffect } from "react";
import StackNavigation from "../navigation/StackNavigation";
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

const buttonComponent = (props) => <StyledButton {...props} />;

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

  const props = {
    // navigation: StackNavigation.navigation,
    to: "SeleccionarLista",
    children: "Seleccionar lista",
    color: "primary",
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header openDrawer={openDrawer} />
      <View style={styles.buttonContainer}>
        <StyledButton
          navigation={StackNavigation}
          to={"SeleccionarLista"}
          children={"Seleccionar lista"}
          color={"primary"}
        />
        <StyledButton
          navigation={StackNavigation}
          to={"CrearLista"}
          children={"Crear lista"}
          color={"secondary"}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
