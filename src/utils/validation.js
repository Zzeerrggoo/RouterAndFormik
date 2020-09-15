import * as yup from 'yup';

export const createAccountValidation = yup.object({
  firstName: yup.string().required('Required field'),
  lastName: yup.string().required('Required field'),
  displayName: yup.string().required('Required field'),
  email: yup
    .string()
    .email('Incorrect email address')
    .required('Required field'),
  password: yup.string().min(8).max(64).required('Required field'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')], 'It should be equal to password')
    .required('Password confirm is required'),
  accountType: '',
});

export const loginValidation = yup.object({
  email: yup
    .string()
    .email('Incorrect email address')
    .required('Required field'),
  password: yup.string().required('Required field'),
});
