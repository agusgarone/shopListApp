import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Formik, useField } from "formik";
import Input from "../StyledInput";
import StyledButton from "../StyledButton";
import theme from "../../theme";

const initialValues = {
  nombreProducto: "",
  categorias: "",
  listasCreadas: "",
};

const FORM_STATUS = {
  idle: "idle",
  wrongCredentials: "wrongCredentials",
};

const FormFilterProducts = ({ onDismiss }: { onDismiss: () => void }) => {
  const handleFormikSubmit = async (
    values: { nombreProducto: any; categorias: any; listasCreadas: any },
    actions: {
      setStatus: (arg0: string) => void;
      setSubmitting: (arg0: boolean) => void;
    }
  ) => {
    actions.setStatus(FORM_STATUS.idle);
    actions.setSubmitting(true);
    try {
      const { nombreProducto, categorias, listasCreadas } = values;
      console.log("values", nombreProducto, categorias, listasCreadas);
      onDismiss();
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
            <View style={styles.fields}>
              <FormikInputValue
                label={"Nombre del producto"}
                name="nombreProducto"
                placeholder={"Ingrese el nombre"}
              />
              <FormikInputValue
                label={"Categorias"}
                name="categorias"
                placeholder={"Ingrese categorias"}
              />
              <FormikInputValue
                label={"Por listas creadas"}
                name="listasCreadas"
                placeholder={"Ingrese listas"}
              />
            </View>
            <View style={styles.buttons}>
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

const styles = StyleSheet.create({
  fields: {
    flex: 3,
  },
  buttons: {
    flex: 1,
  },
});

export default FormFilterProducts;
