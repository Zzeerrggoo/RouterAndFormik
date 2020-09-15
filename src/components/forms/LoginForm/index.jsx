import React from 'react';
import { Formik, Form } from 'formik';
import { loginValidation } from '../../../utils';
import FormField from '../components/FormField';
import styles from '../forms.module.scss';
import classNames from 'classnames';

const handleSubmit = (values, actions) => {
  actions.resetForm();
};

function LoginForm() {
  const btnNames = classNames(styles.formElement, styles.formButton);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={loginValidation}
    >
      <Form className={styles.container}>
        <FormField name="email" placeholder="Email address" />
        <FormField name="password" placeholder="Password" />
        <button type="submit" className={btnNames}>
          LOGIN
        </button>
      </Form>
    </Formik>
  );
}

export default LoginForm;
