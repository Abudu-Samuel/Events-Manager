import { isEmpty } from 'lodash';

const validateSignup = (userData) => {
  const errors = {};
  if (userData.username === undefined || userData.username.trim() === '') {
    errors.username = 'Username is required.';
  }
  if (userData.email === undefined || userData.email.trim() === '') {
    errors.email = 'Email is required';
  }
  if (userData.password === undefined || userData.password.trim() === '') {
    errors.password = 'Password is required';
  }
  if (userData.firstname === undefined || userData.firstname.trim() === '') {
    errors.firstname = 'First name is required';
  }
  if (userData.lastname === undefined || userData.lastname.trim() === '') {
    errors.lastname = 'Last name is required';
  }
  if (userData.password.length < 6) {
    errors.password = 'Password should be atleast 6 characters long';
  }
  return {
    errors,
    validInput: isEmpty(errors)
  };
};

const validateSignin = (userData) => {
  const errors = {};
  if (userData.username === undefined || userData.username.trim() === '') {
    errors.username = 'Username is required.';
  }
  if (userData.password === undefined || userData.password.trim() === '') {
    errors.password = 'Password is required';
  }
  return {
    errors,
    validInput: isEmpty(errors)
  };
};

export {
  validateSignup,
  validateSignin
};

