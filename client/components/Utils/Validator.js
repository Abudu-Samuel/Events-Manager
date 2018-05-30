import validator from 'validator';

const validateSignup = (userData) => {
  const errors = {};
  if (userData.username.length > 0 && userData.username.length < 4) {
    errors.username = 'Username should be more than three letters';
  }
  if (userData.firstname.length > 0 && userData.firstname.length < 4) {
    errors.firstname = 'First name should be more than three letters';
  }
  if (userData.lastname.length > 0 && userData.lastname.length < 4) {
    errors.lastname = 'Last name should be more than three letters';
  }
  if (!validator.isAlpha(userData.username)) {
    errors.username = 'Username should contain only alphabets';
  }
  if (!validator.isEmail(userData.email)) {
    errors.email = 'Email must be valid, e.g you@example.com';
  }
  if (userData.password === undefined || userData.password.trim() === '') {
    errors.password = 'Password is required';
  }
  if (!validator.isAlpha(userData.firstname)) {
    errors.firstname = 'First Name should contain only alphabets';
  }
  if (!validator.isAlpha(userData.lastname)) {
    errors.lastname = 'Last Name should contain only alphabets';
  }
  if (userData.password.length < 6) {
    errors.password = 'Password should be atleast 6 characters long';
  }
  return {
    errors,
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
  };
};

const validateCenter = (centerData) => {
  const errors = {};
  if (centerData.name === undefined || centerData.name.trim() === '') {
    errors.name = 'Name is Required';
  }
  if (centerData.name.length > 0 && centerData.name.length < 4) {
    errors.name = 'Name of center should be more than two letters';
  }
  if (!validator.isAlphanumeric(centerData.name.split(' ').join(''))) {
    errors.name = 'Name should contain alphabet/number';
  }
  if (!validator.isAlpha(centerData.state)) {
    errors.state = 'State should contain only alphabets';
  }
  if (!validator.isAlphanumeric(centerData.location.split(' ').join(''))) {
    errors.location = 'Location should contain alphabet/number';
  }
  if (!validator.isAlphanumeric(centerData.description.split(' ').join(''))) {
    errors.description = 'Description should contain alphabet/number';
  }
  if (!validator.isInt(String(centerData.capacity))) {
    errors.capacity = 'Capacity should contain only number';
  }
  if (!validator.isFloat(String(centerData.price))) {
    errors.price = 'Price should contain only number';
  }
  if (centerData.capacity === undefined) {
    errors.capacity = 'Capacity is Required';
  }
  if (centerData.location === undefined || centerData.location.trim() === '') {
    errors.location = 'Location is Required';
  }
  if (centerData.price === undefined) {
    errors.price = 'Price is Required';
  }
  if (centerData.state === undefined || centerData.state.trim() === '') {
    errors.state = 'State is Required';
  }
  if (centerData.description === undefined || centerData.description.trim() === '') {
    errors.description = 'Description is Required';
  }
  if (centerData.image === undefined || centerData.image.trim() === '') {
    errors.image = 'Image is Required';
  }
  return {
    errors,
  };
};

const validateEvent = (eventData) => {
  const errors = {};
  if (!validator.isAlphanumeric(eventData.title.split(' ').join(''))) {
    errors.title = 'Event title should contain alphabet/number';
  }
  if (validator.isEmpty(eventData.date)) {
    errors.date = 'Date is required';
  }
  if (!validator.isAlphanumeric(eventData.description.split(' ').join(''))) {
    errors.description = 'Description should contain alphabet/number';
  }
  if (!validator.isAlpha(eventData.type.split(' ').join(''))) {
    errors.type = 'Type should contain only alphabets';
  }
  if (validator.isEmpty(eventData.image)) {
    errors.image = 'Image is Required';
  }
  return {
    errors,
  };
};

export {
  validateSignup,
  validateSignin,
  validateCenter,
  validateEvent
};

