import * as yup from "yup";

export const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

export const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  city: yup.string().required("required"),
  country: yup.string().required("required"),
});

export const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  city: "",
  country: "",
};

export const profileFormFields = {
  firstName: {
    name: "firstName",
    label: "First Name",
    fullWidth: true,
    variant: "filled",
    type: "text",
    size: "small",
  },
  lastName: {
    name: "lastName",
    fullWidth: true,
    variant: "filled",
    type: "text",
    size: "small",
    label: "Last Name",
  },
  email: {
    name: "email",
    fullWidth: true,
    variant: "filled",
    type: "text",
    size: "small",
    label: "Email",
  },
  contact: {
    name: "contact",
    fullWidth: true,
    variant: "filled",
    type: "text",
    size: "small",
    label: "Contact Number",
  },
  city: {
    name: "city",
    fullWidth: true,
    variant: "filled",
    type: "text",
    size: "small",
    label: "City",
  },
  country: {
    name: "country",
    fullWidth: true,
    variant: "filled",
    type: "text",
    size: "small",
    label: "Country",
  },
};
