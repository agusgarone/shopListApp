import { View, Text, StyleSheet } from "react-native";
import { DrawerProps, StackProps } from "../types";
import StyledButton from "../components/StyledButton";
import * as SQLite from "expo-sqlite";
import FormCreateCategorie from "../components/forms/FormCreateCategorie";

const CreateCategorie = ({
  StackNavigation,
  DrawerNavigation,
  db,
}: {
  StackNavigation: StackProps;
  DrawerNavigation: DrawerProps;
  db: SQLite.WebSQLDatabase;
}) => {
  const redirect = () => DrawerNavigation.navigation.navigate("Categories");
  return (
    <View style={styles.screen}>
      <View style={styles.form}>
        <FormCreateCategorie to={redirect} db={db} />
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
