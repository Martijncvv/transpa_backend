"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"answers",
			[
				{
					answer: "Perfect",
					voteCount: 0,
					questionId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Too sweet",
					voteCount: 0,
					questionId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Too sour",
					voteCount: 0,
					questionId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Too fat",
					voteCount: 0,
					questionId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "1",
					voteCount: 0,
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
					voteCount: 0,
					questionId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "4",
					voteCount: 0,
					questionId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "5",
					voteCount: 0,
					questionId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Perfect",
					voteCount: 0,
					questionId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Too salt",
					voteCount: 0,
					questionId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Too spicy",
					voteCount: 0,
					questionId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Yes",
					voteCount: 0,
					questionId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "No",
					voteCount: 0,
					questionId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "1",
					voteCount: 0,
					questionId: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "2",
					voteCount: 0,
					questionId: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "3",
					voteCount: 0,
					questionId: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "4",
					voteCount: 0,
					questionId: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "5",
					voteCount: 0,
					questionId: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Bad",
					voteCount: 0,
					questionId: 6,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Neutral",
					voteCount: 0,
					questionId: 6,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Good",
					voteCount: 0,
					questionId: 6,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Yes",
					voteCount: 0,
					questionId: 7,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "No",
					voteCount: 0,
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
