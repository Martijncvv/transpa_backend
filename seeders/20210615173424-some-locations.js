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
					zipcode: "3361BK",
					streetNumber: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					city: "Rotterdam",
					zipcode: "3071JW",
					streetNumber: 14,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					city: "Dordrecht",
					zipcode: "3311KE",
					streetNumber: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					city: "Amsterdam",
					zipcode: "1018CZ",
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
