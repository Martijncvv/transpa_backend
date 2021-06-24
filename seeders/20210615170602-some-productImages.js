"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"productImages",
			[
				{
					productImageURL:
						"https://upload.wikimedia.org/wikipedia/commons/0/0c/Cow_female_black_white.jpg",
					productId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productImageURL:
						"https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/3/8/4/5/2445483-1-eng-GB/Feeding-cows-milk-that-may-contain-antibiotic-residues-what-s-the-risk_wrbm_large.jpg",
					productId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productImageURL:
						"https://i.ytimg.com/vi/uNqFbEng7_A/maxresdefault.jpg",
					productId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productImageURL:
						"https://www.noracooks.com/wp-content/uploads/2020/05/square.jpg",
					productId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productImageURL:
						"https://d1f2ieqjc8iqzi.cloudfront.net/s3fs-public/styles/mobile_image_crop_type_image_style/public/2019-10/Vital%20role%20of%20hygiene%20Italian%20cheese%20production-hero.jpg?sOSEBo_KvkNhN_geCiUQfSVXD4et3ykE&itok=YJOROZos",
					productId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productImageURL:
						"https://static.themoscowtimes.com/image/article_1360/0b/1d5cb7dd3fab4b97b86f0405b8f8a1e4.jpg",
					productId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productImageURL:
						"https://www.thebalancesmb.com/thmb/Yw7hGCIZWQRCnt4ZWJ11cUX3-d4=/3865x2576/filters:fill(auto,1)/hands-picking-up-pizza-slices-691049443-5b05c24aeb97de0037dd357e.jpg",
					productId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productImageURL:
						"https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/9/3/2/9/2109239-1-eng-GB/Stouffer-s-jumps-into-clean-label-pool-with-reformulation_wrbm_large.jpg",
					productId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productImageURL:
						"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ih97FyDk72Xc/v0/1200x-1.jpg",
					productId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productImageURL:
						"https://www.cripto-valuta.net/wp-content/uploads/2020/11/En-crypto-1024x576.jpg",
					productId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					productImageURL:
						"https://i.pinimg.com/originals/39/1a/86/391a86194281d155b1755dc373cfa01a.jpg",
					productId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("productImages", null, {});
	},
};
