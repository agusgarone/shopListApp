import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DrawerScreenProps } from "@react-navigation/drawer";

export type StackParamList = {
  Home?: undefined;
  CreateList?: undefined;
  SelectList?: undefined;
  CheckList?: undefined;
  CreateProduct?: undefined;
  Products?: undefined;
};

export type StackProps = NativeStackScreenProps<StackParamList>;
export type DrawerProps = DrawerScreenProps<any>;
