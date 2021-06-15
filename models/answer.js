"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class answer extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			answer.belongsTo(models.question);
		}
	}
	answer.init(
		{
			answer: { type: DataTypes.TEXT, allowNull: false },
			voteCount: { type: DataTypes.INTEGER, allowNull: false },
		},
		{
			sequelize,
			modelName: "answer",
		}
	);
	return answer;
};