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
import { getAllCategories } from "../data/Controller";
import ItemRender from "../components/ItemRender";

interface ICategories {
  navigation: DrawerProps;
  db: SQLite.WebSQLDatabase;
}

const Categories = ({ navigation, db }: ICategories) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const openDrawer = () => {
    navigation.navigation.openDrawer();
  };

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
      <Header openDrawer={openDrawer} />
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
