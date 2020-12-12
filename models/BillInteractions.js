module.exports = function (sequelize, DataTypes) {
  const BillInteractions = sequelize.define(
    "BillInteractions",
    {
      userId: DataTypes.INTEGER,
      billId: DataTypes.INTEGER,
    },
    {
      timestamps: false,
    }
  );

  return BillInteractions;
};
