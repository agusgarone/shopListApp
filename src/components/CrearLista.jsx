import { Text, View, FlatList, StyleSheet } from "react-native";
import productsList from "../data/productsList";
import StyledButton from "./StyledButton";
import theme from "../theme";

const ProductItem = ({ productName }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{productName}</Text>
    </View>
  );
};

const CrearLista = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.productList}
        data={productsList}
        renderItem={(product) => (
          <ProductItem productName={product.item.fullName} />
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
  item: {
    backgroundColor: "#FFF",
    padding: 20,
    marginHorizontal: 16,
    borderBottomColor: theme.colors.white,
    borderStyle: "solid",
    borderBottomWidth: 2,
  },
  title: {
    fontSize: theme.fontSize.body,
  },
});

export default CrearLista;
