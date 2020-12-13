module.exports = (sequelize, DataTypes) => {
  const Interaction = sequelize.define("Interaction", {
    isLiked: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
    billId: DataTypes.INTEGER
  });

  return Interaction;
};