import { View, StyleSheet, SafeAreaView } from "react-native";
import StyledButton from "../components/StyledButton.jsx";
import Header from "../components/Header.jsx";

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

const Home = ({ navigation }) => {
  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header openDrawer={openDrawer} />
      <View style={styles.buttonContainer}>
        <StyledButton
          navigation={navigation}
          to={"SeleccionarLista"}
          children={"Seleccionar lista"}
          color={"primary"}
        />
        <StyledButton
          navigation={navigation}
          to={"CrearLista"}
          children={"Crear lista"}
          color={"secondary"}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
