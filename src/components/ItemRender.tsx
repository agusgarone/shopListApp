import { View, Text, StyleSheet } from "react-native";
import theme from "../theme";

interface IItemRender {
  value: string;
  id: string;
}

const ItemRender = ({ value, id }: IItemRender) => {
  return (
    <View style={styles.box}>
      <Text>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderBottomWidth: 2,
    borderColor: theme.colors.white,
  },
});

export default ItemRender;
