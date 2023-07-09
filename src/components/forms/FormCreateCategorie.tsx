import React from "react";
import { View, Text } from "react-native";
import { Formik, useField } from "formik";
import Input from "../StyledInput";
import StyledButton from "../StyledButton";
import theme from "../../theme";
import * as SQLite from "expo-sqlite";
import { createCategoria } from "../../data/Controller";
import { FormikInputValue } from "./Formik/InputText";

const initialValues = {
  nombre: "",
};

const FORM_STATUS = {
  idle: "idle",
  wrongCredentials: "wrongCredentials",
};

interface IForm {
  to: () => void;
  db: SQLite.WebSQLDatabase;
}

const FormCreateCategorie = ({ to, db }: IForm) => {
  const handleFormikSubmit = async (
    values: { nombre: any },
    actions: {
      setStatus: (arg0: string) => void;
      setSubmitting: (arg0: boolean) => void;
    }
  ) => {
    actions.setStatus(FORM_STATUS.idle);
    actions.setSubmitting(true);
    try {
      const { nombre } = values;
      console.log("values", nombre);
      createCategoria(db, [nombre]);
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

export default FormCreateCategorie;
