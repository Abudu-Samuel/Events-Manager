import jwt from 'jsonwebtoken';

const decodeToken = jwt.decode(localStorage.getItem('x-access-token'));

export default decodeToken;
