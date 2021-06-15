"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"salesLocations",
			[
				{
					productId: 1,
					locationId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productId: 1,
					locationId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productId: 1,
					locationId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productId: 1,
					locationId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productId: 2,
					locationId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productId: 2,
					locationId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productId: 2,
					locationId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productId: 3,
					locationId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productId: 3,
					locationId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productId: 4,
					locationId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productId: 5,
					locationId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productId: 6,
					locationId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productId: 7,
					locationId: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productId: 8,
					locationId: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("salesLocations", null, {});
	},
};
