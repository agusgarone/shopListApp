import { View, FlatList, StyleSheet, ScrollView } from "react-native";
import productsList from "../data/productsList";
import StyledButton from "../components/StyledButton";
import ProductItem from "../components/ProductItem";
import { useState } from "react";
import ModalSeleccionarProducto from "../components/ModalSeleccionarProducto";

const CrearLista = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <ModalSeleccionarProducto
        show={modalVisible}
        onDismiss={() => setModalVisible(false)}
      />
      <FlatList
        style={styles.productList}
        data={productsList}
        renderItem={(product) => <ProductItem product={product.item} />}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.buttonContainer}>
        <StyledButton
          children={"Agregar"}
          color={"primary"}
          onPress={() => setModalVisible(true)}
        />
        <StyledButton children={"Aceptar"} color={"secondary"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 26,
  },
  productList: {
    height: 520,
    flexGrow: 0,
  },
  buttonContainer: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
});

export default CrearLista;
