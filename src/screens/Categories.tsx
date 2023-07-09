import { View, SafeAreaView, StyleSheet, FlatList } from "react-native";
import { ICategoriesScreen } from "../common/types";
import Header from "../components/Header";
import StyledButton from "../components/StyledButton";
import theme from "../common/theme";
import ModalFilters from "../components/ModalFilters";
import { useEffect, useState } from "react";
import { getAllCategories } from "../data/Controller";
import ItemRender from "../components/ItemRender";
import { openDrawer } from "../common/utils";

const Categories = ({ navigation, db }: ICategoriesScreen) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    if (refresh) {
      getAllCategories(db, setCategorias);
      setRefresh(false);
    }
  }, [refresh]);

  useEffect(() => {
    navigation.navigation.addListener("focus", () => {
      getAllCategories(db, setCategorias);
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
          <View style={styles.list}>
            <FlatList
              data={categorias}
              renderItem={({ item }) => {
                return (
                  <ItemRender
                    id={item.id}
                    value={item.name}
                    key={`${item.name}-${item.id}`}
                    db={db}
                    setRefresh={setRefresh}
                    screen={"categorias"}
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
            children={"Crear categoria"}
            color={"primary"}
            type="Navigate"
            navigation={navigation}
            to="CreateCategorie"
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
    marginTop: 20,
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
export default Categories;
