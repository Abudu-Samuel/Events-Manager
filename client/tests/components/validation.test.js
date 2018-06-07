import expect from 'expect';
import { validateSignup, validateSignin, validateCenter, validateEvent } from '../../components/Utils/Validator';

describe('validate signup inputs', () => {
  it('returns an object of error message on invalid signup inputs', () => {
    const inputs = {
      username: '',
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    };
    expect(validateSignup(inputs)).toBeTruthy();
  });

  it('returns an object of error message on invalid username less than 4', () => {
    const inputs = {
      username: 'tes',
      firstname: 'tester',
      lastname: 'testing',
      email: 'testing@gmail.com',
      password: 'password'
    };
    expect(validateSignup(inputs)).toBeTruthy();
  });

  it('returns an object of error message on invalid firstname less than 4', () => {
    const inputs = {
      username: 'tester',
      firstname: 'tes',
      lastname: 'testing',
      email: 'testing@gmail.com',
      password: 'password'
    };
    expect(validateSignup(inputs)).toBeTruthy();
  });

  it('returns an object of error message on invalid lastname less than 4', () => {
    const inputs = {
      username: 'tester',
      firstname: 'testing',
      lastname: 'tes',
      email: 'testing@gmail.com',
      password: 'password'
    };
    expect(validateSignup(inputs)).toBeTruthy();
  });
});

describe('validate signin inputs', () => {
  it('returns an object of error message on invalid signin inputs', () => {
    const inputs = {
      username: '',
      password: ''
    };
    expect(validateSignin(inputs)).toBeTruthy();
  });
});

describe('validate event inputs', () => {
  it('returns an object of error message on invalid event inputs', () => {
    const inputs = {
      title: '',
      date: '',
      type: '',
      image: '',
      description: '',

    };
    expect(validateEvent(inputs)).toBeTruthy();
  });
});

describe('validate center inputs', () => {
  it('returns an object of error message on invalid center inputs', () => {
    const inputs = {
      name: '',
      date: '',
      state: '',
      location: '',
      description: '',
      capacity: '',
      price: '',
      image: ''
    };
    expect(validateCenter(inputs)).toBeTruthy();
  });

  it('returns an object of error message on invalid center inputs', () => {
    const inputs = {
      name: 'hi',
      date: '2014/12/12',
      state: 'ikeja',
      location: 'lagos',
      description: 'awesome',
      capacity: 1233,
      price: 1223,
      image: 'image.png'
    };
    expect(validateCenter(inputs)).toBeTruthy();
  });

  it('returns an object of error message on invalid center inputs', () => {
    const inputs = {
      name: 'hitata',
      date: '2014/12/12',
      state: 'ikeja',
      location: 'lagos',
      description: 'awesome',
      capacity: 1233,
      price: undefined,
      image: 'image.png'
    };
    expect(validateCenter(inputs)).toBeTruthy();
  });

  it('returns an object of error message on invalid center inputs', () => {
    const inputs = {
      name: 'hitita',
      date: '2014/12/12',
      state: 'ikeja',
      location: 'lagos',
      description: 'awesome',
      capacity: undefined,
      price: 1223,
      image: 'image.png'
    };
    expect(validateCenter(inputs)).toBeTruthy();
  });
});
