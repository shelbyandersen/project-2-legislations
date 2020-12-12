module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    // TODO: Days of the week?
  });

  User.associate = function (models) {
    User.belongsToMany(models.Interaction, {
      through: "BillInteractions",
      foreignKey: "userId",
    });
  };

  return User;
};
