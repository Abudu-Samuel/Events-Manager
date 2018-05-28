import jwt from 'jsonwebtoken';

const decodeToken = () => {
  if (localStorage.getItem('x-access-token')) {
    console.log('ADMIN BOOL', jwt.decode(localStorage.getItem('x-access-token')).isAdmin);
    return !!jwt.decode(localStorage.getItem('x-access-token')).isAdmin;
  }
  console.log('JKHVGFDCGVHBJN');
  return 'Not Authenticated';
};

export default decodeToken;
