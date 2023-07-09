import { View, StyleSheet } from "react-native";
import { ICreateScreen } from "../common/types";
import StyledButton from "../components/StyledButton";
import FormCreateCategorie from "../components/forms/FormCreateCategorie";
import Header from "../components/Header";
import { openDrawer, redirect } from "../common/utils";

const CreateCategorie = ({
  StackNavigation,
  DrawerNavigation,
  db,
}: ICreateScreen) => {
  return (
    <View style={styles.screen}>
      <Header openDrawer={() => openDrawer(DrawerNavigation)} />
      <View style={styles.form}>
        <FormCreateCategorie
          to={() => redirect({ navProps: DrawerNavigation, to: "Categories" })}
          db={db}
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

export default CreateCategorie;
