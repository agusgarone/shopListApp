import { useState } from "react";
import theme from "../theme";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

const Input = ({ label, placeholder, style, error, value, onChangeText }) => {
  const [focus, setFocus] = useState(false);

  const styles = StyleSheet.create({
    scrollView: {
      overflow: "hidden",
    },
    container: {
      ...style,
      flexDirection: "row",
      alignItems: "center",
      borderColor: focus ? theme.colors.primary : theme.colors.tertiary,
      opacity: 0.6,
      width: "100%",
      height: 48,
      borderWidth: 2,
      borderRadius: 8,
      paddingHorizontal: 16,
    },
    label: {
      color: theme.colors.tertiary,
      fontSize: theme.fontSize.body,
      marginBottom: 8,
    },
    input: {
      flex: 1,
      color: theme.colors.white,
    },
    error: {
      borderColor: "red",
    },
  });

  const stylesToViewInput = [styles.container, error && styles.error];

  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      keyboardShouldPersistTaps="handled"
    >
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={stylesToViewInput}>
        <TextInput
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.tertiary}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </ScrollView>
  );
};

export default Input;
