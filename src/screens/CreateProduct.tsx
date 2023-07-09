import { View, StyleSheet } from "react-native";
import { ICreateScreen } from "../common/types";
import StyledButton from "../components/StyledButton";
import FormCreateProduct from "../components/forms/FormCreateProduct";
import { useEffect, useState } from "react";
import { getAllCategories } from "../data/Controller";
import { redirect } from "../common/utils";

const CreateProduct = ({
  StackNavigation,
  DrawerNavigation,
  db,
}: ICreateScreen) => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    StackNavigation.navigation.addListener("focus", () => {
      getAllCategories(db, setCategorias);
    });
  }, []);

  return (
    <View style={styles.screen}>
      <View style={styles.form}>
        <FormCreateProduct
          to={() => redirect({ navProps: DrawerNavigation, to: "Products" })}
          db={db}
          dataRender={categorias}
        />
      </View>
      <View style={styles.buttons}>
        <StyledButton
          navigation={StackNavigation}
          to="Products"
          children={"Cancelar"}
          color={"secondary"}
          type="Navigate"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  form: {
    flex: 5,
  },
  buttons: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default CreateProduct;
