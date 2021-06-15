"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.addColumn("products", "companyId", {
			type: Sequelize.INTEGER,
			references: {
				model: "companies",
				key: "id",
			},
			onUpdate: "CASCADE",
			onDelete: "SET NULL",
		});

		await queryInterface.addColumn("productImages", "productId", {
			type: Sequelize.INTEGER,
			references: {
				model: "products",
				key: "id",
			},
			onUpdate: "CASCADE",
			onDelete: "SET NULL",
		});

		await queryInterface.addColumn("questions", "productId", {
			type: Sequelize.INTEGER,
			references: {
				model: "products",
				key: "id",
			},
			onUpdate: "CASCADE",
			onDelete: "SET NULL",
		});

		await queryInterface.addColumn("answers", "questionId", {
			type: Sequelize.INTEGER,
			references: {
				model: "questions",
				key: "id",
			},
			onUpdate: "CASCADE",
			onDelete: "SET NULL",
		});

		await queryInterface.addColumn("salesLocations", "productId", {
			type: Sequelize.INTEGER,
			references: {
				model: "products",
				key: "id",
			},
			onUpdate: "CASCADE",
			onDelete: "SET NULL",
		});

		await queryInterface.addColumn("salesLocations", "locationId", {
			type: Sequelize.INTEGER,
			references: {
				model: "locations",
				key: "id",
			},
			onUpdate: "CASCADE",
			onDelete: "SET NULL",
		});

		await queryInterface.addColumn("relevantProducts", "productId", {
			type: Sequelize.INTEGER,
			references: {
				model: "products",
				key: "id",
			},
			onUpdate: "CASCADE",
			onDelete: "SET NULL",
		});

		await queryInterface.addColumn("relevantProducts", "relevantProductId", {
			type: Sequelize.INTEGER,
			references: {
				model: "products",
				key: "id",
			},
			onUpdate: "CASCADE",
			onDelete: "SET NULL",
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.removeColumn("products", "companyId");
		await queryInterface.removeColumn("productImages", "productId");

		await queryInterface.removeColumn("questions", "productId");
		await queryInterface.removeColumn("answers", "questionId");

		await queryInterface.removeColumn("salesLocations", "productId");
		await queryInterface.removeColumn("salesLocations", "locationId");

		await queryInterface.removeColumn("relevantProducts", "productId");
		await queryInterface.removeColumn("relevantProducts", "relevantProductId");
	},
};
