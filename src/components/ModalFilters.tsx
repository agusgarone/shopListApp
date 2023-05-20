import { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Input from "./StyledInput";
import theme from "../theme";
import StyledButton from "./StyledButton";

const ModalFilters = ({ show, onDismiss }) => {
  const bottomSheetHeight = Dimensions.get("window").height * 0.92;
  const [open, setOpen] = useState(show);
  const bottom = useRef(new Animated.Value(-bottomSheetHeight)).current;

  useEffect(() => {
    if (show) {
      setOpen(show);
      Animated.timing(bottom, {
        toValue: 0,
        duration: 700,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(bottom, {
        toValue: -bottomSheetHeight,
        duration: 700,
        useNativeDriver: false,
      }).start(() => {
        setOpen(false);
      });
    }
  }, [bottom, bottomSheetHeight, show]);

  const onGesture = (event) => {
    if (event?.nativeEvent?.translationY > 0) {
      bottom.setValue(-event?.nativeEvent?.translationY);
    }
  };

  const onGestureEnd = (event) => {
    if (event?.nativeEvent?.translationY > bottomSheetHeight / 3) {
      onDismiss();
    } else {
      bottom.setValue(0);
    }
  };

  if (!open) {
    return null;
  }
  return (
    <Animated.View
      style={[styles.container, { height: bottomSheetHeight, bottom: bottom }]}
    >
      <TouchableWithoutFeedback onPress={() => onDismiss()}>
        <View
          style={{
            height: Dimensions.get("window").height * 0.27,
            width: "100%",
          }}
        ></View>
      </TouchableWithoutFeedback>
      <View style={styles.modal}>
        <PanGestureHandler onGestureEvent={onGesture} onEnded={onGestureEnd}>
          <Text style={styles.title}>Filtros</Text>
        </PanGestureHandler>
        <View style={styles.modalContent}>
          <View style={styles.fields}>
            <Input
              label={"Nombre del producto"}
              placeholder={"Ingrese el nombre"}
            />
            <Input label={"Categorias"} placeholder={"Ingrese categorias"} />
            <Input
              label={"Por listas creadas"}
              placeholder={"Ingrese listas"}
            />
          </View>
          <View style={styles.buttons}>
            <StyledButton children={"Aceptar"} color={"primary"} />
          </View>
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 100,
    justifyContent: "flex-end",
  },
  modal: {
    height: Dimensions.get("window").height * 0.55,
    width: "100%",
    backgroundColor: theme.colors.darkWhite,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      height: -3,
      width: 0,
    },
    shadowOpacity: 0.24,
    shadowRadius: 4,
    elevation: 3,
    overflow: "hidden",
  },
  title: {
    fontSize: theme.fontSize.heading,
    color: theme.colors.tertiary,
    paddingTop: 13,
    paddingBottom: 10,
    paddingHorizontal: 24,
    borderColor: theme.colors.white,
    borderBottomWidth: 2,
  },
  modalContent: {
    width: "100%",
    height: "90%",
    zIndex: 10,
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 10,
  },
  fields: {
    flex: 3,
  },
  buttons: {
    flex: 1,
  },
});

export default ModalFilters;