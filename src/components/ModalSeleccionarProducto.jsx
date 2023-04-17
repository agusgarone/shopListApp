import { View, Text, StyleSheet, Modal } from "react-native";
import StyledButton from "./StyledButton";
import { useEffect } from "react";

const ModalContent = ({ closeModal }) => {
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text>Prueba</Text>
        <StyledButton
          children={"Aceptar"}
          color={"primary"}
          onPress={closeModal}
        />
      </View>
    </View>
  );
};

const ModalSeleccionarProducto = ({ modalVisible, setModalVisible }) => {
  useEffect(() => {
    console.log("modalVisible", modalVisible);
  }, [modalVisible]);
  return (
    <Modal visible={modalVisible} animationType="fade" transparent={true}>
      <ModalContent closeModal={() => setModalVisible(false)} />
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    flex: 1,
    // margin: 10,
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 25,
    paddingVertical: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default ModalSeleccionarProducto;
