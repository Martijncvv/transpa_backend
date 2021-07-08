const cors = require("cors");
const app = express();
app.use(cors());

const express = require("express");
const productsRouter = require("./routers/products");
const authRouter = require("./routers/auth");

const PORT = process.env.PORT || 4000;

app.use(express.json());

if (process.env.DELAY) {
	app.use((req, res, next) => {
		setTimeout(() => next(), parseInt(process.env.DELAY));
	});
}

app.use("/", authRouter);
app.use("/products", productsRouter);

app.listen(PORT, () => {
	console.log(`Listening on port: ${PORT}`);
});
