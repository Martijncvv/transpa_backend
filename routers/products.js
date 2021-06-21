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

router.get("/locations", async (req, res) => {
	const locations = await Location.findAll();
	console.log("Locations:", locations);
	res.status(200).send({ message: "ok", locations });
});

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

	const products = await Product.findAll({
		where: {
			companyId: id,
		},
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

router.post("/addLocation", async (req, res) => {
	const { zipcode, streetNumber } = req.body;
	const location = await Location.create({
		zipcode,
		streetNumber: parseInt(streetNumber),
	});
	return res.status(201).send({ message: "Location created", location });
});

module.exports = router;
