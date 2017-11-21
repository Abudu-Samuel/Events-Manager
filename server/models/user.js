
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: {
          args: /^[a-z]+$/i,
          msg: 'First Name can contain only alphabets'
        },
        len: {
          args: [3, 40],
          msg: 'First Name should be longer than 3 words and less than 40 words'
        }
      }
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: {
          args: /^[a-z]+$/i,
          msg: 'Last Name can contain only alphabets'
        },
        len: {
          args: [3, 40],
          msg: 'Last Name should be longer than 3 words and less than 40 words'
        }
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        is: {
          args: /^[a-z]+$/i,
          msg: 'Username can contain only alphabets'
        },
        len: {
          args: [3, 40],
          msg: 'Username should be longer than 3 words and less than 40 words'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: 'Email must be in email format, e.g you@example.com'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  });
  user.associate = (models) => {
    user.hasMany(models.event, {
      foreignKey: 'userId',
      as: 'events'
    });
  };
  return user;
};
