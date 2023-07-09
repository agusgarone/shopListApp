import React, { useState } from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Lists from "../data/Lists";
import theme from "../common/theme";
import ModalLista from "../components/ModalList";
import { IItem, IListItem } from "../common/types";

const Item = ({ list, onPress }: IItem) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <Text style={styles.title}>{list?.name}</Text>
    <Text style={styles.subText}>{`${list?.products?.length} productos`}</Text>
    <Text style={styles.subText}>{list?.created}</Text>
  </TouchableOpacity>
);

const ListItem = ({ list, setModalVisible }: IListItem) => (
  <Item list={list} onPress={() => setModalVisible(true)} />
);

const SeleccionarLista = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ModalLista
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <FlatList
        overScrollMode="never"
        style={styles.list}
        data={Lists}
        renderItem={({ index, item, separators }) => (
          <ListItem list={item} setModalVisible={setModalVisible} />
        )}
        keyExtractor={(item) => item.id.toString()}
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
    fontWeight: theme.fontWeights.bold as any,
  },
  subText: {
    fontSize: theme.fontSize.body,
  },
});

export default SeleccionarLista;
