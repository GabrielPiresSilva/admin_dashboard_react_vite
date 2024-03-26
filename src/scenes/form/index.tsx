import { Box, Button, Grid } from "@mui/material";
import { Formik, Form } from "formik";
import { useMediaQuery } from "@mui/material";
import Header from "../../components/Header";

import { initialValues, validations } from "./schemas";
import FormField from "./../../components/form/fields/formfield";

const CreateUser = () => {
  const isNonMobile: boolean = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="Create User" subtitle="Create a new user profile" />
      <Formik
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
        validationSchema={validations[0]}
      >
        {({ values, errors, touched }) => {
          const {
            firstName: firstNameV,
            lastName: lastNameV,
            email: emailV,
            contact: contactV,
            address1: address1V,
            address2: address2V,
          } = values;
          return (
            <Form>
              <Grid container spacing={isNonMobile ? 2 : 0}>
                <Grid item xs={12} sm={6}>
                  <FormField
                    variant="filled"
                    type="text"
                    label="First Name"
                    value={firstNameV}
                    name="firstName"
                    error={!!touched.firstName && !!errors.firstName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Last Name"
                    value={lastNameV}
                    name="lastName"
                    error={!!touched.lastName && !!errors.lastName}
                  />
                </Grid>
              </Grid>
              <Box>
                <FormField
                  variant="filled"
                  type="text"
                  label="Email"
                  value={emailV}
                  name="email"
                  error={!!touched.email && !!errors.email}
                />
              </Box>
              <Box>
                <FormField
                  variant="filled"
                  type="text"
                  label="Contact"
                  value={contactV}
                  name="contact"
                  error={!!touched.contact && !!errors.contact}
                />
              </Box>
              <Box>
                <FormField
                  variant="filled"
                  type="text"
                  label="Address 1"
                  value={address1V}
                  name="address1"
                  error={!!touched.address1 && !!errors.address1}
                />
              </Box>
              <Box>
                <FormField
                  variant="filled"
                  type="text"
                  label="Address 2"
                  value={address2V}
                  name="address2"
                  error={!!touched.address2 && !!errors.address2}
                />
              </Box>

              <Box display="flex" justifyContent="end" mt="10px">
                <Button type="submit" color="secondary" variant="contained">
                  Create New User
                </Button>
              </Box>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default CreateUser;
