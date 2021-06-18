"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class relevantProduct extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			relevantProduct.belongsTo(models.product, {
				foreignKey: "productId",
				as: "sourceProduct",
			});
			relevantProduct.belongsTo(models.product, {
				foreignKey: "relevantProductId",
				as: "targetProduct",
			});
		}
	}
	relevantProduct.init(
		{
			test: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "relevantProduct",
		}
	);
	return relevantProduct;
};
