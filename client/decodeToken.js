import jwt from 'jsonwebtoken';

const decodeToken = () => {
  if (localStorage.getItem('x-access-token')) {
    return !!jwt.decode(localStorage.getItem('x-access-token')).isAdmin;
  }
  return 'Not Authenticated';
};

export default decodeToken;
