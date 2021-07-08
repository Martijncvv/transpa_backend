"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"locations",
			[
				{
					city: "Papendrecht",
					zipcode: "3363HN",
					streetNumber: 84,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					city: "Sliedrecht",
					zipcode: "3351JM",
					streetNumber: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					city: "Rotterdam",
					zipcode: "3353HH",
					streetNumber: 14,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					city: "Dordrecht",
					zipcode: "2964CE",
					streetNumber: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					city: "Amsterdam",
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
