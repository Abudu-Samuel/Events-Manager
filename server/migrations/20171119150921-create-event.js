module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('events', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id',
        as: 'userId'
      }
    },
    centerId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'centers',
        key: 'id',
        as: 'centerId'
      }
    },
    event_title: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Event title field required'
        }
      }
    },
    starts: {
      type: Sequelize.DATE,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Starts field required'
        }
      }
    },
    ends: {
      type: Sequelize.DATE,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Ends field required'
        }
      }
    },
    image: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Description field required'
        }
      }
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
  down: queryInterface => queryInterface.dropTable('events')
};
