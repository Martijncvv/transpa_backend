"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"answers",
			[
				{
					answer: "Perfect",
					voteCount: 8,
					questionId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Too sweet",
					voteCount: 2,
					questionId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Too sour",
					voteCount: 1,
					questionId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Too fat",
					voteCount: 2,
					questionId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "1",
					voteCount: 2,
					questionId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "2",
					voteCount: 0,
					questionId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "3",
					voteCount: 4,
					questionId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "4",
					voteCount: 3,
					questionId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Perfect",
					voteCount: 11,
					questionId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Too salt",
					voteCount: 3,
					questionId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Too spicy",
					voteCount: 5,
					questionId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Yes",
					voteCount: 14,
					questionId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "No",
					voteCount: 5,
					questionId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "1",
					voteCount: 3,
					questionId: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "2",
					voteCount: 2,
					questionId: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "3",
					voteCount: 7,
					questionId: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "4",
					voteCount: 7,
					questionId: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					answer: "Bad",
					voteCount: 4,
					questionId: 6,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Neutral",
					voteCount: 7,
					questionId: 6,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Good",
					voteCount: 2,
					questionId: 6,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Yes",
					voteCount: 6,
					questionId: 7,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "No",
					voteCount: 6,
					questionId: 7,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("answers", null, {});
	},
};
