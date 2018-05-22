module.exports = (sequelize, DataTypes) => {
  const center = sequelize.define('center', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Name Field Required!'
        },
        is: {
          args: /^[a-zA-Z0-9-,]+(\s{0,1}[a-zA-Z0-9-, ])*$/,
          msg: 'Name can contain only alphabets'
        },
        len: {
          args: [3, 40],
          msg: 'Name should be longer than 3 words and less than 40 words'
        }
      }
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Capacity Field Required!'
        },
        isInt: {
          args: true,
          msg: 'Capacity Should contain only Numbers'
        }
      }
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Location Field Required!'
        },
        is: {
          args: /^[a-zA-Z0-9-,]+(\s{0,1}[a-zA-Z0-9-, ])*$/,
          msg: 'Location can contain only alphabets'
        },
        len: {
          args: [3, 40],
          msg: 'Location should be longer than 3 words and less than 40 words'
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Price Field Required!'
        },
        isFloat: {
          args: true,
          msg: 'Price Should contain only Numbers'
        }
      }
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'State Field Required!'
        },
        is: {
          args: /^[a-zA-Z0-9-,]+(\s{0,1}[a-zA-Z0-9-, ])*$/,
          msg: 'State can contain only alphabets'
        },
        len: {
          args: [3, 40],
          msg: 'State should be longer than 3 words and less than 40 words'
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
          args: [3, 400],
          msg: 'Description should be longer than 3 words and less than 40 words'
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
        }
      }
    },
    isAvailable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Availability Field Required!'
        }
      }
    }
  });
  center.associate = (models) => {
    center.hasMany(models.event, {
      foreignKey: 'centerId',
      as: 'events'
    });
  };
  return center;
};
