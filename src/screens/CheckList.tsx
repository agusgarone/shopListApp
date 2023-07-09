import { ScrollView, StyleSheet } from "react-native";
import { View } from "react-native";
import StyledButton from "../components/StyledButton";
import theme from "../common/theme";
import { StackProps } from "../common/types";

const CheckList = (navigation: StackProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.lista}>
        <ScrollView
          overScrollMode="never"
          style={styles.scrollView}
        ></ScrollView>
      </View>
      <StyledButton
        type="Navigate"
        children={"Listo"}
        color={"primary"}
        navigation={navigation}
        to="Home"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  lista: {
    height: "85%",
    width: "100%",
    marginBottom: 10,
    backgroundColor: theme.colors.darkWhite,
  },
  scrollView: {
    height: "100%",
    width: "100%",
  },
});

export default CheckList;
