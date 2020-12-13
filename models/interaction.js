module.exports = (sequelize, DataTypes) => {
  const Interaction = sequelize.define("Interaction", {
    isLiked: { type: DataTypes.BOOLEAN, allowNull: false, },
    userId: { type: DataTypes.INTEGER, allowNull: false, },
    billId: { type: DataTypes.INTEGER, allowNull: false, },
  });

  return Interaction;
};