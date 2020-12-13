module.exports = (sequelize, DataTypes) => {
  const Bill = sequelize.define(
    "Bill",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      yeas: DataTypes.INTEGER,
      nays: DataTypes.INTEGER
    },
  );

  Bill.associate = (models) => {
    Bill.belongsToMany(models.User, {
      through: "Interaction",
      foreignKey: "billId",
    });
  };

  return Bill;
};
