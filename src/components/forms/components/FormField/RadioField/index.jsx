import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';

function RadioField(props) {
  const [field] = useField(props);
  const { label, description } = props;

  return (
    <div>
      <input {...field} {...props} />
      <div>
        <h2>{label}</h2>
        <h3>{description}</h3>
      </div>
    </div>
  );
}

RadioField.propTypes = {
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default RadioField;
