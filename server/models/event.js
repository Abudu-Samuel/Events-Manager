module.exports = (sequelize, DataTypes) => {
  const event = sequelize.define('event', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'UserId Field Required!'
        }
      },
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
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Title Field Required!'
        },
        is: {
          args: /^[a-zA-Z0-9-,]+(\s{0,1}[a-zA-Z0-9-, ])*$/,
          msg: 'Event Title can contain only alphabets'
        },
        len: {
          args: [3, 40],
          msg: 'Event Title should be longer than 3 words and less than 40 words'
        }
      }
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Date Field Required!'
        },
        isDate: {
          args: true,
          msg: 'Fill in Date format, e.g yy-mm-dd'
        }
      }
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Time Field Required!'
        },
        is: {
          args: /(\d{2}(:\d{2}){2}\s(pm|am))/,
          msg: 'Invalid time format. Try this format (hh:mm:ss am/pm)'
        }
      }
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Type Field Required!'
        },
        is: {
          args: /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-,])*$/,
          msg: 'Type of Event can contain only alphabets'
        },
        len: {
          args: [3, 40],
          msg: 'Type of Event should be longer than 3 words and less than 40 words'
        }
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Image Field Required!'
        },
        is: {
          args: /^[a-zA-Z-.,]+(\s{0,1}[a-zA-Z-.,])*$/,
          msg: 'Type of Event can contain only alphabets'
        },
        len: {
          args: [10, 40],
          msg: 'Image should be longer than 10 words and less than 40 words'
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Description Field Required!'
        },
        is: {
          args: /^[a-zA-Z0-9-,]+(\s{0,1}[a-zA-Z0-9-, ])*$/,
          msg: 'Description can contain only alphabets'
        },
        len: {
          args: [6, 250],
          msg: 'Description should be longer than 6 words and less than 250 words'
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
