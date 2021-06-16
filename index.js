const express = require("express");
const productsRouter = require("./routers/products");

const app = express();
const PORT = 4000;

app.use(express.json());

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

// const Product = require("./models").product;

// app.get("/", async (req, res) => {
// 	const products = await Product.findAll();
// 	res.status(200).send({ message: "ok", products });
// });

app.use("/products", productsRouter);

app.listen(PORT, () => {
	console.log(`Listening on port: ${PORT}`);
});
