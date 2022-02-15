import * as yup from 'yup';

const validations = yup.object().shape({
  email: yup
    .string()
    .email('enter a valid email')
    .required('  email is required'),
  password: yup.string().min(5, 'at least 5 characters').required(),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')], 'passwords do not match')
    .required(),
});

export default validations;