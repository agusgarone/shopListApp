import { View, FlatList, StyleSheet } from "react-native";
import productsList from "../data/productsList";
import StyledButton from "../components/StyledButton";
import ProductItem from "../components/ProductItem";
import { useState } from "react";
import ModalSeleccionarProducto from "../components/ModalSeleccionarProducto";
import { StackProps } from "../types";

const CrearLista = (navigation: StackProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <ModalSeleccionarProducto
        show={modalVisible}
        onDismiss={() => setModalVisible(false)}
      />
      <FlatList
        overScrollMode="never"
        style={styles.productList}
        data={productsList}
        renderItem={(product) => <ProductItem product={product.item} />}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.buttonContainer}>
        <StyledButton
          children={"Agregar"}
          color={"primary"}
          type="action"
          action={() => setModalVisible(true)}
        />
        <StyledButton
          children={"Aceptar"}
          color={"secondary"}
          type="Navigate"
          navigation={navigation}
          to="CheckList"
        />
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
