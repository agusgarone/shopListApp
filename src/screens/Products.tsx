import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { DrawerProps } from "../types";
import Header from "../components/Header";
import StyledButton from "../components/StyledButton";
import theme from "../theme";
import ModalFilters from "../components/ModalFilters";
import { useState } from "react";

const Products = (navigation: DrawerProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const openDrawer = () => {
    navigation.navigation.openDrawer();
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ModalFilters
        show={modalVisible}
        onDismiss={() => setModalVisible(false)}
      />
      <Header openDrawer={openDrawer} />
      <View style={styles.screen}>
        <View style={styles.content}>
          <View style={styles.filter}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.buttonText}>Filtro</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.list}>
            <ScrollView
              overScrollMode="never"
              style={styles.scrollView}
            ></ScrollView>
          </View>
        </View>
        <View style={styles.buttons}>
          <StyledButton children={"Crear producto"} color={"primary"} />
          <StyledButton children={"Listo"} color={"secondary"} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: 3,
    display: "flex",
    justifyContent: "flex-end",
  },
  filter: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    marginHorizontal: 20,
  },
  button: {
    width: 100,
    height: 35,
    backgroundColor: theme.colors.tertiary,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: theme.colors.white,
  },
  list: {
    flex: 10,
    marginBottom: 10,
    backgroundColor: theme.colors.darkWhite,
    marginHorizontal: 20,
  },
  scrollView: {
    height: "100%",
    width: "100%",
  },
  buttons: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
export default Products;
