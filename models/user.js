module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isEmail: true },
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

  return User;
};
