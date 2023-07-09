import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import theme from "../theme";
import * as SQLite from "expo-sqlite";
import { deleteProduct } from "../data/Controller";

interface IItemRender {
  value: string;
  id: string;
  db: SQLite.WebSQLDatabase;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}

const ItemRender = ({ value, id, db, setRefresh }: IItemRender) => {
  return (
    <View style={styles.box}>
      <Text>{value}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          deleteProduct(db, [id]);
          setRefresh(true);
        }}
      >
        <Text>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderColor: theme.colors.white,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    padding: 4,
  },
});

export default ItemRender;
