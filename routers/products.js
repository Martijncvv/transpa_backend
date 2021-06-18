const { Router } = require("express");
const { toData } = require("../auth/jwt");
const auth = require("../auth/middleware");

const Product = require("../models").product;
const Company = require("../models").company;
const Question = require("../models").question;
const Answer = require("../models").answer;
const Location = require("../models").location;
const RelevantProduct = require("../models").relevantProduct;

const router = new Router();

router.get("/", async (req, res) => {
	const products = await Product.findAll({
		limit: 5,
	});
	console.log("Normal gett");
	res.status(200).send({ message: "ok", products });
});

router.get("/company", auth, async (req, res) => {
	const auth =
		req.headers.authorization && req.headers.authorization.split(" ");

	const id = toData(auth[1]).companyId;
	console.log("ID", id);

	const products = await Product.findAll({
		where: {
			companyId: id,
		},
	});
	console.log(products);
	// console.log("company products:", products);
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
		],
	});

	res.status(200).send({ message: "ok", product });
});

// router.get("/relevantProducts/:id", async (req, res) => {
// 	const { id } = req.params;

// 	const relevantProducts = await Product.findByPk(id, {
// 		// attributes: ["relevantProductId"],
// 		// include: [Product],
// 		include: { model: Product, as: "targetProduct" },
// 		// include: [{ model: Product, attributes: "relevantProductId" }],
// 	});

// 	res.status(200).send({ message: "ok", relevantProducts });
// });

module.exports = router;
