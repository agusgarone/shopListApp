import { View, Text, StyleSheet } from "react-native";
import StyledButton from "./StyledButton";
import theme from "../theme";

const ProductItem = ({product}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{product.fullName}</Text>
      <StyledButton children={"Eliminar"} color={"delete"} />
    </View>
  );
};

const styles = StyleSheet.create({
    item: {
      backgroundColor: "#FFF",
      padding: 20,
      marginHorizontal: 16,
      borderBottomColor: theme.colors.white,
      borderStyle: "solid",
      borderBottomWidth: 2,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    title: {
      fontSize: theme.fontSize.body,
    },
  });

export default ProductItem;
