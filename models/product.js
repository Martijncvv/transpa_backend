"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class product extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			product.belongsTo(models.company);
			product.hasMany(models.salesLocation);
			product.hasMany(models.productImage);
			product.hasMany(models.relevantProduct);
			product.belongsToMany(models.relevantProduct);
		}
	}
	product.init(
		{
			productName: { type: DataTypes.STRING, allowNull: false },
			mainProductImageURL: { type: DataTypes.STRING, allowNull: false },
			colour: { type: DataTypes.STRING, allowNull: false },
			detailedProductInfo: { type: DataTypes.TEXT, allowNull: false },
			videoURL: { type: DataTypes.STRING },
			socialMediaURL: { type: DataTypes.STRING, allowNull: false },
		},
		{
			sequelize,
			modelName: "product",
		}
	);
	return product;
};
