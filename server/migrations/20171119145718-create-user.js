module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    firstname: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'First name field required'
        }
      }
    },
    lastname: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Last name field required'
        }
      }
    },
    username: {
      type: Sequelize.STRING,
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
      type: Sequelize.STRING,
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
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'password field required'
        }
      }
    },
    isAdmin: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: queryInterface => queryInterface.dropTable('users')
};
