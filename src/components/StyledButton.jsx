import { StyleSheet, Text, TouchableOpacity } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 10,
    fontWeight: theme.fontWeights.normal,
    fontSize: theme.fontSize.body,
    // fontFamily: theme.fonts.main,
  },
  bgColorPrimary: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
  },
  bgColorSecondary: {
    backgroundColor: theme.colors.white,
    color: theme.colors.primary,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  subHeading: {
    fontSize: theme.fontSize.subHeading,
  },
  textColorPrimary: {
    color: theme.colors.white
  },
  textColorSecondary: {
    color: theme.colors.primary
  }
});

export default function StyledButton({
  fontWeight,
  children,
  color,
  style,
  navigation,
  to,
  ...restOfProps
}) {
  const buttonStyles = [
    styles.button,
    color === "primary" && styles.bgColorPrimary,
    color === "secondary" && styles.bgColorSecondary,
    fontWeight === "subHeading" && styles.subHeading,
    style,
  ];

  const textButtonStyle = [
    color === "primary" && styles.textColorPrimary,
    color === "secondary" && styles.textColorSecondary
  ]

  return (
    <TouchableOpacity onPress={() => navigation.navigate(to)} style={buttonStyles} {...restOfProps}>
      <Text style={textButtonStyle}>{children}</Text>
    </TouchableOpacity>
  );
}