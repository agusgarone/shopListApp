import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { DrawerProps } from "../types";
import Header from "../components/Header";
import StyledButton from "../components/StyledButton";
import theme from "../theme";
import ModalFilters from "../components/ModalFilters";
import { useEffect, useState } from "react";
import * as SQLite from "expo-sqlite";
import { getAllProducts } from "../data/Controller";
import ItemRender from "../components/ItemRender";

interface IProducts {
  navigation: DrawerProps;
  db: SQLite.WebSQLDatabase;
}

const Products = ({ navigation, db }: IProducts) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [products, setProducts] = useState([]);
  const openDrawer = () => {
    navigation.navigation.openDrawer();
  };

  useEffect(() => {
    navigation.navigation.addListener("focus", () => {
      getAllProducts(db, setProducts);
    });
  }, []);

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
              onPress={() => {
                setModalVisible(true);
              }}
            >
              <Text style={styles.buttonText}>Filtro</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.list}>
            <FlatList
              data={products}
              renderItem={({ item }) => {
                return (
                  <ItemRender
                    id={item.id}
                    value={item.name}
                    key={`${item.name}-${item.id}`}
                  />
                );
              }}
              overScrollMode="never"
              style={styles.scrollView}
            />
          </View>
        </View>
        <View style={styles.buttons}>
          <StyledButton
            children={"Crear producto"}
            color={"primary"}
            type="Navigate"
            navigation={navigation}
            to="CreateProduct"
          />
          <StyledButton
            children={"Listo"}
            color={"secondary"}
            type="Navigate"
            navigation={navigation}
            to="Home"
          />
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
    borderRadius: 8,
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
