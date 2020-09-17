import React from 'react';
import RadioField from './RadioField';
import { useField } from 'formik';
import styles from './formField.module.scss';

function FormField(props) {
  const [field, meta] = useField(props);
  const { error, touched } = meta;
  const { type } = props;

  const isError = Boolean(error && touched);

  if (type === 'radio') {
    return <RadioField {...props} />;
  }

  return (
    <div className={styles.container}>
      <input
        {...field}
        {...props}
        className={styles.input}
        title={props.placeholder ?? ''}
      />
      {isError && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
}

export default FormField;
