"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class salesLocation extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			salesLocation.belongsToMany(models.location);
			salesLocation.belongsToMany(models.product);
		}
	}
	salesLocation.init(
		{
			test: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "salesLocation",
		}
	);
	return salesLocation;
};
