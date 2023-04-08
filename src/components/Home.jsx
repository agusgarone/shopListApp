import { View, StyleSheet } from "react-native";
import StyledButton from "./StyledButton.jsx";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "flex-end",
  },
  buttonContainer: {
    marginBottom: 60,
    paddingHorizontal: 20,
  },
});

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <StyledButton navigation={navigation} to={'SeleccionarLista'} children={"Seleccionar lista"} color={"primary"} />
        <StyledButton navigation={navigation} to={'CrearLista'} children={"Crear lista"} color={"secondary"} />
      </View>
    </View>
  );
};

export default Home;
