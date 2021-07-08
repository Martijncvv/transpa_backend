"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class location extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			location.belongsToMany(models.product, {
				through: "salesLocations",
				foreignKey: "locationId",
			});
		}
	}
	location.init(
		{
			city: { type: DataTypes.STRING, allowNull: false },
			zipcode: { type: DataTypes.STRING, allowNull: false },
			streetNumber: { type: DataTypes.INTEGER, allowNull: false },
		},
		{
			sequelize,
			modelName: "location",
		}
	);
	return location;
};
