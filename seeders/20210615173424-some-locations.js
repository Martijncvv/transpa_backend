"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"locations",
			[
				{
					zipcode: "3363HN",
					streetNumber: 84,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					zipcode: "3351JM",
					streetNumber: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					zipcode: "3353HH",
					streetNumber: 14,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					zipcode: "2964CE",
					streetNumber: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					zipcode: "3011HB",
					streetNumber: 77,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("locations", null, {});
	},
};
