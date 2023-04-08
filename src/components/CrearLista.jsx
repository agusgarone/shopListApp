import { View, FlatList, StyleSheet } from "react-native";
import productsList from "../data/productsList";
import StyledButton from "./StyledButton";
import ProductItem from "./ProductItem";
import theme from "../theme";

const CrearLista = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.productList}
        data={productsList}
        renderItem={(product) => (
          <ProductItem product={product.item} />
        )}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.buttonContainer}>
        <StyledButton children={"Agregar"} color={"primary"} />
        <StyledButton children={"Aceptar"} color={"secondary"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 26
  },
  productList: {
    height: 500,
    flexGrow: 0,
  },
  buttonContainer: {
    marginBottom: 60,
    paddingHorizontal: 20,
  },
});

export default CrearLista;
