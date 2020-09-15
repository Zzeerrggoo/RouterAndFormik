export const fields = [
  {
    name: 'firstName',
    placeholder: 'First name',
  },
  {
    name: 'lastName',
    placeholder: 'Last name',
  },
  {
    name: 'displayName',
    placeholder: 'Display Name',
  },
  {
    name: 'email',
    placeholder: 'Email Address',
  },
  {
    name: 'password',
    placeholder: 'Password',
    type: 'password',
  },
  {
    name: 'passwordConfirm',
    placeholder: 'Password Confirmation',
    type: 'password',
  },
  {
    name: 'accountType',
    value: 'buyer',
    type: 'radio',
    label: 'Join As a Buyer',
    description:
      'I am looking for a Name, Logo or Tagline for my business, brand or product.',
  },
  {
    name: 'accountType',
    type: 'radio',
    value: 'seller',
    label: 'Join As a Creative or Marketplace Seller',
    description:
      'I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.',
  },
];
