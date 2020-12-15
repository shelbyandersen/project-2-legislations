var bcrypt = require("bcryptjs");
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [4, 36] },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [8, 128] },
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isAlpha: true },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isAlpha: true },
    },
  });

  User.associate = (models) => {
    User.belongsToMany(models.Bill, {
      through: "Interaction",
      foreignKey: "userId",
    });
  };
  
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  User.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  User.addHook("beforeValidate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return User;
};
