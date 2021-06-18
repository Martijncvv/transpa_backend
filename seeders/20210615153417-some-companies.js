"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"companies",
			[
				{
					companyName: "Orange Wolf Trading",
					name: "Marty",
					surname: "van Veen",
					email: "MV@gmail.com",
					password:
						"$2b$10$7rf13jdI2S8ds8g8O0du6euCNV.EKeqJcUx.XD6HraChoahmWrt5a",
					detailedCompanyInfo: "E-commerce arbitrage company",
					companyImageUrl:
						"https://media-exp1.licdn.com/dms/image/C4D0BAQEJ6-eaNFdIQw/company-logo_200_200/0/1585515440879?e=1631750400&v=beta&t=isXYY4CYy1VFFv7tDNAkSRpeC3XFfK7a_by8m-1hNL4",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					companyName: "Binance",
					name: "Changpeng",
					surname: "Zhao",
					email: "CZ@gmail.com",
					password:
						"$2b$10$7rf13jdI2S8ds8g8O0du6euCNV.EKeqJcUx.XD6HraChoahmWrt5a",
					detailedCompanyInfo:
						"Binance is a Cayman Islands-domiciled cryptocurrency exchange that provides a platform for trading various cryptocurrencies founded in 2017.",
					companyImageUrl:
						"https://upload.wikimedia.org/wikipedia/commons/d/d7/Binance.png",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("companies", null, {});
	},
};
