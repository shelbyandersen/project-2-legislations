module.exports = (sequelize, DataTypes) => {
  const Bill = sequelize.define("Bill", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    yeas: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    nays: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
  });

  Bill.associate = (models) => {
    Bill.belongsToMany(models.User, {
      through: "Interaction",
      foreignKey: "billId",
    });
  };

  return Bill;
};
