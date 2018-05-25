import swal from 'sweetalert';

const logInSuccess = () => {
  swal('Login Successful!', '', 'success');
};

const signUpSuccess = () => {
  swal('SignUp Successful', '', 'success');
};

const editEventSuccess = () => {
  swal('Event Edited', '', 'success');
};

const editCenterSuccess = () => {
  swal('Center Edited', '', 'success');
};

const addCenterSuccess = () => {
  swal('Center Added', '', 'success');
};

const addEventSuccess = () => {
  swal('Event Added', '', 'success');
};

const successPrompter = (message) => {
  swal(message);
};
export {
  logInSuccess,
  signUpSuccess,
  editEventSuccess,
  editCenterSuccess,
  addCenterSuccess,
  addEventSuccess,
  successPrompter,
};
