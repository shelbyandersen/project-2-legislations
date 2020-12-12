module.exports = function (sequelize, DataTypes) {
  const Interaction = sequelize.define("Interaction", {
    isLiked: DataTypes.BOOLEAN,
  });

  Interaction.associate = function (models) {
    Interaction.belongsToMany(models.User, {
      through: "BillInteractions",
      foreignKey: "billId",
    });
  };

  return Interaction;
};
