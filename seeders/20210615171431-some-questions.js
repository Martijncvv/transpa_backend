"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"questions",
			[
				{
					question: "Did you like the taste of the milk?",
					productId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					question: "What would you rate this milk",
					productId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					question: "What would you rate this cheese",
					productId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					question: "Was the pizza spicy enough?",
					productId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					question: "What would you rate this pizza",
					productId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					question: "What would you rate this cryptocurrency",
					productId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					question: "Do you think it's harmful for the environment?",
					productId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],

			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("questions", null, {});
	},
};
