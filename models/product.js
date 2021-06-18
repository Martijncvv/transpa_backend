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
			product.hasMany(models.productImage);

			product.belongsToMany(models.product, {
				through: "relevantProducts",
				as: "sourceProduct",
				foreignKey: "productId",
			});
			product.belongsToMany(models.product, {
				through: "relevantProducts",
				as: "relevantProduct",
				foreignKey: "relevantProductId",
			});

			product.hasMany(models.question);

			product.belongsToMany(models.location, {
				through: "salesLocations",
				foreignKey: "productId",
			});
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
