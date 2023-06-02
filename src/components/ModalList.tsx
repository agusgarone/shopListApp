import { View, Text, FlatList, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import StyledButton from "./StyledButton";
import Lists from "../data/Lists";
import theme from "../theme";

const ModalContent = ({ closeModal }) => {
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>{Lists[0].name}</Text>
          <Text>{`Creada el ${Lists[0].created}`}</Text>
          <FlatList
            overScrollMode="never"
            style={styles.list}
            data={Lists[0].products}
            renderItem={(product) => <ProductItem product={product} />}
            keyExtractor={(item) => item.name}
          />
        </View>
        <StyledButton
          children={"Aceptar"}
          color={"primary"}
          type="Action"
          action={closeModal}
        />
      </View>
    </View>
  );
};

const ProductItem = ({ product }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.titleProduct}>{product.item.name}</Text>
    </View>
  );
};

const ModalLista = ({ modalVisible, setModalVisible }) => {
  return (
    <Modal
      isVisible={modalVisible}
      animationIn={"slideInUp"}
      animationInTiming={800}
      animationOut={"slideOutDown"}
      animationOutTiming={800}
    >
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
    width: 300,
    margin: 10,
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
  modalContent: {
    justifyContent: "flex-start",
  },
  title: {
    fontSize: theme.fontSize.subHeading,
    fontWeight: theme.fontWeights.bold as any,
  },
  list: {
    height: 300,
    flexGrow: 0,
  },
  item: {
    backgroundColor: "#FFF",
    padding: 20,
    marginHorizontal: 16,
    borderBottomColor: theme.colors.white,
    borderStyle: "solid",
    borderBottomWidth: 2,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  titleProduct: {
    fontSize: theme.fontSize.body,
  },
});

export default ModalLista;
