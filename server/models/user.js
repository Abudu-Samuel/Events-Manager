
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'First name field required'
        }
      }
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Last name field required'
        }
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Username already taken!'
      },
      validate: {
        notEmpty: {
          args: true,
          msg: 'Username field required'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Email already taken!'
      },
      isEmail: {
        args: true,
        msg: 'Email must be in email format, e.g you@example.com'
      },
      validate: {
        notEmpty: {
          args: true,
          msg: 'Email field required'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'password field required'
        }
      }
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
