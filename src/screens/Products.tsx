import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { IProductsScreen } from "../common/types";
import Header from "../components/Header";
import StyledButton from "../components/StyledButton";
import theme from "../common/theme";
import ModalFilters from "../components/ModalFilters";
import { useEffect, useState } from "react";
import { getAllProducts } from "../data/Controller";
import ItemRender from "../components/ItemRender";
import { openDrawer } from "../common/utils";

const Products = ({ navigation, db }: IProductsScreen) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [products, setProducts] = useState([]);
  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    if (refresh) {
      getAllProducts(db, setProducts);
      setRefresh(false);
    }
  }, [refresh]);

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
      <Header openDrawer={() => openDrawer(navigation)} />
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
                    db={db}
                    setRefresh={setRefresh}
                    screen={"productos"}
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
