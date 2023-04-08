import React, { useState } from "react";
import { View, FlatList, Text, StyleSheet, Modal, Button } from "react-native";
import Lists from "../data/Lists";
import theme from "../theme";

const ModalContent = ({ closeModal }) => {
  return (
    <View>
      <Text>Este es el contenido del modal</Text>
      <Button title="Cerrar modal" onPress={closeModal} />
    </View>
  );
};

const ListItem = ({ list, setModalVisible }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{list?.item?.name}</Text>
      <Text
        style={styles.subText}
      >{`${list?.item?.products?.length} productos`}</Text>
      <Text style={styles.subText}>{list?.item?.created}</Text>
      <Button title="Abrir modal" onPress={() => setModalVisible(true)} />
    </View>
  );
};

const SeleccionarLista = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal visible={modalVisible} animationType="slide" transparent={false}>
        <ModalContent closeModal={() => setModalVisible(false)} />
      </Modal>
      <FlatList
        style={styles.list}
        data={Lists}
        renderItem={(list) => <ListItem list={list} setModalVisible={setModalVisible} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 26,
  },
  list: {
    height: 660,
    flexGrow: 0,
  },
  buttonContainer: {
    marginBottom: 60,
    paddingHorizontal: 20,
  },
  item: {
    backgroundColor: "#FFF",
    paddingVertical: 20,
    paddingHorizontal: 25,
    marginHorizontal: 16,
    marginBottom: 20,
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  title: {
    fontSize: theme.fontSize.heading,
    fontWeight: theme.fontWeights.bold,
  },
  subText: {
    fontSize: theme.fontSize.body,
  },
});

export default SeleccionarLista;
