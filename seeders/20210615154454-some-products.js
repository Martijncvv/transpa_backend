"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"products",
			[
				{
					productName: "Organic Milk",
					mainProductImageURL:
						"https://www.debeterewereld.nl/wp-content/uploads/2014/09/11.jpg",
					colour: "#60b2e6",
					detailedProductInfo:
						'Organic milk refers to a number of milk products from livestock raised according to organic farming methods. In most jurisdictions, use of the term "organic" or equivalents like "bio" or "eco", on any product is regulated by food authorities.',
					videoURL: "https://www.youtube.com/watch?v=2XyyQ1YXCz0",
					socialMediaURL: "https://www.facebook.com/simplymilkorganic",
					createdAt: new Date(),
					updatedAt: new Date(),
					companyId: 1,
				},
				{
					productName: "Organic Cheese",
					mainProductImageURL:
						"https://cheeseshop.henriwillig.com/images/thumbnails/380/380/detailed/1/HW176_Organic_Jersey_A.jpg?t=1622214853",
					colour: "#ffee00",
					detailedProductInfo:
						"This cheese is produced from 100% organic Jersey milk from our own Jersey cows. The Jersey cheese is characterized by a soft creamy taste and is full of vitamins. The milk from our Jersey cows has a different composition of fat and protein than milk from a traditional Holstein cow.",
					videoURL: "https://www.youtube.com/watch?v=5ypbjAldKCc",
					socialMediaURL: "https://www.facebook.com/greenfareorganiccafe/",
					createdAt: new Date(),
					updatedAt: new Date(),
					companyId: 1,
				},
				{
					productName: "Organic Pizza",
					mainProductImageURL:
						"https://www.oetker.nl/Recipe/Recipes/oetker.nl/nl-nl/miscallaneous/image-thumb__97330__RecipeDetailsLightBox/pizza-caprese.jpg",
					colour: "#ffbb00",
					detailedProductInfo: `All GreenFare Organic Cafe Food...
            ✅ Is loaded with Phytonutrients and Intact Fiber.
            ✅ Is Fully Organically grown.
            ✅ Is CERTIFIED "Healthy Vegan Food" for your best health and correct weight management. `,
					videoURL: "https://www.youtube.com/watch?v=ktbkQ2QAeas",
					socialMediaURL: "https://www.facebook.com/greenfareorganiccafe/",
					createdAt: new Date(),
					updatedAt: new Date(),
					companyId: 1,
				},
				{
					productName: "Bitcoin",
					mainProductImageURL:
						"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/1200px-BTC_Logo.svg.png",
					colour: "#ff9100",
					detailedProductInfo: `The bitcoin network is a peer-to-peer payment network that operates on a cryptographic protocol. Users send and receive bitcoins, the units of currency, by broadcasting digitally signed messages to the network using bitcoin cryptocurrency wallet software.`,
					videoURL: "https://www.youtube.com/watch?v=f0HC1Udk6-E",
					socialMediaURL: "https://www.facebook.com/binance",
					createdAt: new Date(),
					updatedAt: new Date(),
					companyId: 2,
				},
				{
					productName: "Ethereum",
					mainProductImageURL:
						"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/628px-Ethereum_logo_2014.svg.png",
					colour: "#2d3040",
					detailedProductInfo: `Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether (ETH or Ξ) is the native cryptocurrency of the platform. After Bitcoin, it is the second-largest cryptocurrency by market capitalization. Ethereum is the most actively used blockchain.`,
					videoURL: "",
					socialMediaURL: "https://www.facebook.com/binance",
					createdAt: new Date(),
					updatedAt: new Date(),
					companyId: 2,
				},
				{
					productName: "Uniswap",
					mainProductImageURL:
						"https://cryptologos.cc/logos/uniswap-uni-logo.png",
					colour: "#ff00fb",
					detailedProductInfo: `Uniswap is a decentralized finance protocol that is used to exchange cryptocurrencies. Uniswap is also the name of the company that initially built the Uniswap protocol.`,
					videoURL: "",
					socialMediaURL: "https://www.facebook.com/binance",
					createdAt: new Date(),
					updatedAt: new Date(),
					companyId: 2,
				},
				{
					productName: "VeChain",
					mainProductImageURL:
						"https://s2.coinmarketcap.com/static/img/coins/200x200/3077.png",
					colour: "#1aa1f0",
					detailedProductInfo: `VeChain is a cryptocurrency and smart contracts platform focused on supply chain management. It allows manufacturers to add sensors, such as RFID tags, to their products that can then record data onto the VeChain blockchain.`,
					videoURL: "https://youtu.be/vfAEir7uT_g?t=583",
					socialMediaURL: "https://www.facebook.com/binance",
					createdAt: new Date(),
					updatedAt: new Date(),
					companyId: 2,
				},
				{
					productName: "Wootrade",
					mainProductImageURL:
						"https://s3-recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/638/300/original/woo_logo.png?1610603560",
					colour: "#000000",
					detailedProductInfo: `Wootrade is a darkpool trading platform that offers significantly above-average liquidity with tighter spreads than the major exchanges,`,
					videoURL: "https://www.youtube.com/watch?v=kSN7Mcw8KD8",
					socialMediaURL: "https://www.facebook.com/binance",
					createdAt: new Date(),
					updatedAt: new Date(),
					companyId: 2,
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("products", null, {});
	},
};
