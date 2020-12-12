module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    // TODO: Days of the week?
  });

  User.associate = (models) => {
    User.belongsToMany(models.Bill, {
      through: "Interaction",
      foreignKey: "userId",
    });
  };

  return User;
};
