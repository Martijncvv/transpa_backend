"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("products", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			productName: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			mainProductImageURL: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			colour: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			detailedProductInfo: {
				allowNull: false,
				type: Sequelize.TEXT,
			},
			videoURL: {
				type: Sequelize.STRING,
			},
			socialMediaURL: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("products");
	},
};
