"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"relevantProducts",
			[
				{
					productId: 1,
					relevantProductId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productId: 1,
					relevantProductId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productId: 2,
					relevantProductId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productId: 2,
					relevantProductId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productId: 3,
					relevantProductId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productId: 3,
					relevantProductId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					productId: 4,
					relevantProductId: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productId: 4,
					relevantProductId: 6,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productId: 4,
					relevantProductId: 7,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productId: 4,
					relevantProductId: 8,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productId: 5,
					relevantProductId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productId: 5,
					relevantProductId: 6,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productId: 5,
					relevantProductId: 7,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productId: 5,
					relevantProductId: 8,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productId: 6,
					relevantProductId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productId: 6,
					relevantProductId: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productId: 6,
					relevantProductId: 7,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productId: 6,
					relevantProductId: 8,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productId: 7,
					relevantProductId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productId: 7,
					relevantProductId: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productId: 7,
					relevantProductId: 6,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productId: 7,
					relevantProductId: 8,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productId: 8,
					relevantProductId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productId: 8,
					relevantProductId: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productId: 8,
					relevantProductId: 6,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productId: 8,
					relevantProductId: 7,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("relevantProducts", null, {});
	},
};
