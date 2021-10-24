import { Grid, Paper, Button, Typography, TextField } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'

export const CreatePatientForm = () => {
  const paperStyle = { padding: '15px', width: 350, height: 'auto' };
  const btnStyle = { marginTop: 22 };

  const initialValues = {
    name: '',
    birthdate: '',
    email: '',
    address: '',
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "It's too short").required("Required"),
    birthdate: Yup.string().required("Required"),
    email: Yup.string().email("Enter valid email").required("Required"),
    address: Yup.string().required("Required"),
  })

  const onSubmit = (values: any, props: any) => {
    alert(JSON.stringify(values));
    props.resetForm();
  }

  return (
    <Grid>
      <Paper elevation = {0} style={paperStyle}>
        <Grid alignItems='center'>
          <Typography variant='caption' style={{marginBottom: 15}}>Fill in the form to register a new patient.</Typography>
        </Grid>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          {(pros) => (
            <Form noValidate>
              <Field as={TextField} style={{minWidth: 300, maxWidth: 300}} variant="standard" name='name' label='Name' fulWidth  helperText={<ErrorMessage name='name' />} required/>
              <Field as={TextField} style={{minWidth: 300, maxWidth: 300}} variant="standard" name='birthdate' label='Birthdate' fulWidth  helperText={<ErrorMessage name='birthdate' />} required/>
              <Field as={TextField} style={{minWidth: 300, maxWidth: 300}} variant="standard"name='email' label='Email' fulWidth  helperText={<ErrorMessage name='email' />} required/>
              <Field as={TextField} style={{minWidth: 300, maxWidth: 300}} variant="standard" name='address' label='Address' fulWidth helperText={<ErrorMessage name='address' />} required/>
              <Button type='submit' style={btnStyle} variant='contained' color='primary'>Register</Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  )
}
