import React from "react";
import { View, Text } from "react-native";
import { Formik, useField } from "formik";
import Input from "../StyledInput";
import StyledButton from "../StyledButton";
import theme from "../../theme";
import { FormikInputValue } from "./Formik/InputText";

const initialValues = {
  nombre: "",
};

const FORM_STATUS = {
  idle: "idle",
  wrongCredentials: "wrongCredentials",
};

const FormSelectProduct = () => {
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
      actions.setSubmitting(false);
    } catch (e) {
      actions.setStatus(FORM_STATUS.wrongCredentials);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleFormikSubmit}>
      {({ handleSubmit, isSubmitting }) => {
        return (
          <>
            <FormikInputValue
              label={"Nombre"}
              name="nombre"
              placeholder={"Ingrese el nombre"}
            />
            <View>
              <StyledButton
                children="Buscar"
                color="primary"
                type="Action"
                key={"btn-buscar"}
                action={handleSubmit}
              />
            </View>
          </>
        );
      }}
    </Formik>
  );
};
export default FormSelectProduct;
