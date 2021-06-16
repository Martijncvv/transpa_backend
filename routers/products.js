const { Router } = require("express");
const Product = require("../models").product;
const Company = require("../models").company;

const router = new Router();

router.get("/", async (req, res, next) => {
	const products = await Product.findAll();
	res.status(200).send({ message: "ok", products });
});

module.exports = router;
