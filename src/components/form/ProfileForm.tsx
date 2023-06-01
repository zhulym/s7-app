/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';
import { Formik } from "formik";
import { Box, Button, TextField, TextFieldProps, useMediaQuery } from '@mui/material';

import { IProfileForm } from 'model/app';
import { useAppDispatch } from 'hooks/reduxHooks';
import { setFormData } from 'store/slices/usersSlice';
import { checkoutSchema, initialValues, profileFormFields } from 'constants/profileForm';

import DashboardHeader from 'components/page-header/PageHeader';

const ProfileForm: FC = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const dispatch = useAppDispatch();

  const onSubmit = (values: IProfileForm, { resetForm }: any) => {
    dispatch(setFormData(values));
    console.log(values);
    resetForm();
  };

  return (
    <Box m="20px">
      <DashboardHeader title="CREATE USER" subtitle="Create a New User Profile" />

      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{ "& > div": { gridColumn: isMobile ? "span 4" : undefined } }}
            >
              <TextField
                {...profileFormFields.firstName as TextFieldProps}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                {...profileFormFields.lastName as TextFieldProps}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                {...profileFormFields.email as TextFieldProps}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                {...profileFormFields.contact as TextFieldProps}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                {...profileFormFields.city as TextFieldProps}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.city}
                error={!!touched.city && !!errors.city}
                helperText={touched.city && errors.city}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                {...profileFormFields.country as TextFieldProps}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.country}
                error={!!touched.country && !!errors.country}
                helperText={touched.country && errors.country}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>

            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained" >
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default ProfileForm;
