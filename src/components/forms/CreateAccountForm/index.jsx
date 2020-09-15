import React from 'react';
import { Formik, Form } from 'formik';
import { createAccountValidation } from '../../../utils';
import FormField from '../components/FormField';
import { fields } from './fields';
import styles from '../forms.module.scss';
import classNames from 'classnames';

const handleSubmit = (values, actions) => {
  actions.resetForm();
};

function CreateAccountForm() {
  const btnNames = classNames(styles.formElement, styles.formButton);

  return (
    <Formik
      initialValues={Object.assign(
        {},
        ...fields.map(item => ({
          [item.name]: item.initialValue ?? '',
        }))
      )}
      onSubmit={handleSubmit}
      validationSchema={createAccountValidation}
    >
      <Form className={styles.container}>
        {fields.map((item, index) => (
          <FormField key={index} {...item} />
        ))}

        <button type="submit" className={btnNames}>
          Create account
        </button>
      </Form>
    </Formik>
  );
}

export default CreateAccountForm;
