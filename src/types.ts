import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DrawerScreenProps } from "@react-navigation/drawer";

export type StackParamList = {
  Home?: undefined;
  CrearLista?: undefined;
  SeleccionarLista?: undefined;
  CheckList?: undefined;
};

export type StackProps = NativeStackScreenProps<StackParamList>;
export type DrawerProps = DrawerScreenProps<any>;
