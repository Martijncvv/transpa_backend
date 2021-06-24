const { Router } = require("express");
const { toData } = require("../auth/jwt");
const auth = require("../auth/middleware");

const Product = require("../models").product;
const Company = require("../models").company;
const Question = require("../models").question;
const Answer = require("../models").answer;
const Location = require("../models").location;
const SalesLocation = require("../models").salesLocation;
const ProductImage = require("../models").productImage;

const RelevantProduct = require("../models").relevantProduct;

const router = new Router();

router.get("/", async (req, res) => {
	const products = await Product.findAll({
		limit: 5,
		include: [Company],
	});

	res.status(200).send({ message: "ok", products });
});

router.get("/companyProducts", auth, async (req, res) => {
	const auth =
		req.headers.authorization && req.headers.authorization.split(" ");

	const id = toData(auth[1]).companyId;

	const products = await Product.findAll({
		where: {
			companyId: id,
		},
		include: [Company, { model: Question, include: [Answer] }],
	});
	res.status(200).send({ message: "ok", products });
});

router.get("/productDetails/:id", async (req, res) => {
	const { id } = req.params;

	const product = await Product.findByPk(id, {
		include: [
			Company,
			{ model: Product, as: "relevantProduct" },
			{ model: Question, include: [Answer] },
			{ model: Location },
			{ model: ProductImage },
			// { model: RelevantProduct },
		],
	});

	res.status(200).send({ message: "ok", product });
});

router.patch("/vote", async (req, res) => {
	const { answerId } = req.body;

	const answer = await Answer.findByPk(answerId);
	const voteCount = answer.dataValues.voteCount + 1;

	await answer.update({ voteCount });

	return res.status(200).send({ message: "Vote Count:", answer });
});

router.get("/locations", async (req, res) => {
	const locations = await Location.findAll();
	res.status(200).send({ message: "ok", locations });
});

router.post("/addLocation", async (req, res) => {
	const { zipcode, streetNumber } = req.body;
	const location = await Location.create({
		zipcode,
		streetNumber: parseInt(streetNumber),
	});
	return res.status(200).send({ message: "Location created", location });
});

router.post("/addProduct", auth, async (req, res) => {
	const auth =
		req.headers.authorization && req.headers.authorization.split(" ");

	const id = toData(auth[1]).companyId;

	const {
		productName,
		mainProductImageURL,
		colour,
		detailedProductInfo,
		videoURL,
		socialMediaURL,
		location,
		relevantProductIds,
		productImage_1,
		productImage_2,
		productImage_3,
		question_1,
		question_2,
		question_3,

		answer_1a,
		answer_1b,
		answer_1c,
		answer_1d,
		answer_2a,
		answer_2b,
		answer_2c,
		answer_2d,
		answer_3a,
		answer_3b,
		answer_3c,
		answer_3d,
	} = req.body;

	const product = await Product.create({
		productName,
		mainProductImageURL,
		colour,
		detailedProductInfo,
		videoURL,
		socialMediaURL,
		companyId: id,
	});
	const productId = product.dataValues.id;

	await SalesLocation.create({
		locationId: location,
		productId,
	});

	if (relevantProductIds.length) {
		await relevantProductIds.forEach((relevantProduct) => {
			RelevantProduct.create({
				productId: relevantProduct,
				relevantProductId: productId,
			});
			console.log(`PRODUCTID ${productId}, RELEVANTPRODUCT ${relevantProduct}`);
		});
	}

	if (productImage_1) {
		await ProductImage.create({
			productImageURL: productImage_1,
			productId,
		});
	}
	if (productImage_2) {
		await ProductImage.create({
			productImageURL: productImage_2,
			productId,
		});
	}
	if (productImage_3) {
		await ProductImage.create({
			productImageURL: productImage_3,
			productId,
		});
	}

	if (question_1) {
		const questionData_1 = await Question.create({
			question: question_1,
			productId,
		});

		if (answer_1a) {
			await Answer.create({
				answer: answer_1a,
				voteCount: 0,
				questionId: questionData_1.dataValues.id,
			});
		}

		if (answer_1b) {
			await Answer.create({
				answer: answer_1b,
				voteCount: 0,
				questionId: questionData_1.dataValues.id,
			});
		}
		if (answer_1c) {
			await Answer.create({
				answer: answer_1c,
				voteCount: 0,
				questionId: questionData_1.dataValues.id,
			});
		}
		if (answer_1d) {
			await Answer.create({
				answer: answer_1d,
				voteCount: 0,
				questionId: questionData_1.dataValues.id,
			});
		}
	}

	if (question_2) {
		const questionData_2 = await Question.create({
			question: question_2,
			productId,
		});

		if (answer_2a) {
			await Answer.create({
				answer: answer_2a,
				voteCount: 0,
				questionId: questionData_2.dataValues.id,
			});
		}
		if (answer_2b) {
			await Answer.create({
				answer: answer_2b,
				voteCount: 0,
				questionId: questionData_2.dataValues.id,
			});
		}
		if (answer_2c) {
			await Answer.create({
				answer: answer_2c,
				voteCount: 0,
				questionId: questionData_2.dataValues.id,
			});
		}
		if (answer_2d) {
			await Answer.create({
				answer: answer_2d,
				voteCount: 0,
				questionId: questionData_2.dataValues.id,
			});
		}
	}

	if (question_3) {
		const questionData_3 = await Question.create({
			question: question_3,
			productId,
		});
		if (answer_3a) {
			await Answer.create({
				answer: answer_3a,
				voteCount: 0,
				questionId: questionData_3.dataValues.id,
			});
		}
		if (answer_3b) {
			await Answer.create({
				answer: answer_3b,
				voteCount: 0,
				questionId: questionData_3.dataValues.id,
			});
		}
		if (answer_3c) {
			await Answer.create({
				answer: answer_3c,
				voteCount: 0,
				questionId: questionData_3.dataValues.id,
			});
		}
		if (answer_3d) {
			await Answer.create({
				answer: answer_3d,
				voteCount: 0,
				questionId: questionData_3.dataValues.id,
			});
		}
	}

	return res.status(200).send({ message: "Product created", product });
});

router.delete("/delete/:productId", async (req, res) => {
	const { productId } = req.params;

	const productToDelete = await Product.findByPk(productId);
	const deleted = await productToDelete.destroy();

	return res.status(204).send({ message: "Product deleted", deleted });
});

module.exports = router;
