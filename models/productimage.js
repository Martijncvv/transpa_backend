"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class productImage extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			productImage.belongsTo(models.product);
		}
	}
	productImage.init(
		{
			productImageURL: { type: DataTypes.STRING, allowNull: false },
		},
		{
			sequelize,
			modelName: "productImage",
		}
	);
	return productImage;
};
