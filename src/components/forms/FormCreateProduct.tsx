import React from "react";
import { View, Text } from "react-native";
import { Formik, useField } from "formik";
import Input from "../StyledInput";
import StyledButton from "../StyledButton";
import theme from "../../theme";
import * as SQLite from "expo-sqlite";

const initialValues = {
  nombre: "",
  categoria: "",
};

const FORM_STATUS = {
  idle: "idle",
  wrongCredentials: "wrongCredentials",
};

interface IForm {
  to: () => void;
  db: SQLite.WebSQLDatabase;
}

const FormCreateProduct = ({ to, db }: IForm) => {
  const add = (nombre) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO categorias (name) values (?)",
        [nombre],
        (txObj, resultSet) =>
          console.log("value created success", txObj, resultSet),
        (txObj, error) => {
          console.log("error", error);
          return true;
        }
      );
    });
  };

  const handleFormikSubmit = async (
    values: { nombre: any; categoria: any },
    actions: {
      setStatus: (arg0: string) => void;
      setSubmitting: (arg0: boolean) => void;
    }
  ) => {
    actions.setStatus(FORM_STATUS.idle);
    actions.setSubmitting(true);
    try {
      const { nombre, categoria } = values;
      console.log("values", nombre, categoria);
      add(nombre);
      actions.setSubmitting(false);
      to();
    } catch (e) {
      actions.setStatus(FORM_STATUS.wrongCredentials);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleFormikSubmit}>
      {({ handleSubmit, isSubmitting }) => {
        return (
          <View
            style={{
              justifyContent: "space-between",
              flex: 1,
              paddingHorizontal: 20,
            }}
          >
            <View style={{ paddingTop: 40 }}>
              <FormikInputValue
                label={"Nombre"}
                name="nombre"
                placeholder={"Ingrese el nombre"}
              />
              <FormikInputValue
                label={"Categoria"}
                name="categoria"
                placeholder={"Ingrese la categoria"}
              />
            </View>
            <View>
              <StyledButton
                children="Aceptar"
                color="primary"
                type="Action"
                key={"btn-buscar"}
                action={handleSubmit}
              />
            </View>
          </View>
        );
      }}
    </Formik>
  );
};

const FormikInputValue = ({
  name,
  label,
  placeholder,
}: {
  name: string;
  label?: string;
  placeholder?: string;
}) => {
  const [field, meta, helpers] = useField(name);

  return (
    <View style={{ height: 80, marginBottom: 5 }}>
      <Input
        label={label}
        placeholder={placeholder}
        error={meta.error}
        value={field.value}
        onChangeText={(value: any) => helpers.setValue(value)}
        style={{ marginBottom: 15 }}
      />
      {meta.error && (
        <View
          style={{
            flexDirection: "row",
            width: "100%",
          }}
        >
          <Text style={{ color: "red", fontSize: theme.fontSize.s }}>
            {meta.error}
          </Text>
        </View>
      )}
    </View>
  );
};

export default FormCreateProduct;
