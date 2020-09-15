import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';
import styles from './radio.module.scss';

function RadioField(props) {
  const [field] = useField(props);
  const { label, description } = props;

  return (
    <div className={styles.container}>
      <input {...field} {...props} className={styles.checkInput} />
      <div className={styles.infoContainer}>
        <h2 className={styles.header}>{label}</h2>
        <h3 className={styles.subInfo}>{description}</h3>
      </div>
    </div>
  );
}

RadioField.propTypes = {
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default RadioField;
