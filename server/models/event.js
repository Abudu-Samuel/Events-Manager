module.exports = (sequelize, DataTypes) => {
  const event = sequelize.define('event', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id',
        as: 'userId'
      }
    },
    centerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'centers',
        key: 'id',
        as: 'centerId'
      }
    },
    event_title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Event title field required'
        }
      }
    },
    starts: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Starts field required'
        }
      }
    },
    ends: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Ends field required'
        }
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Description field required'
        }
      }
    }
  });
  event.associate = (models) => {
    event.belongsTo(models.center, {
      foreignKey: 'centerId',
      onDelete: 'CASCADE'
    });
    event.belongsTo(models.user, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
  };
  return event;
};
