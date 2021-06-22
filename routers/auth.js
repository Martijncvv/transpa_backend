const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const bcrypt = require("bcrypt");
const Company = require("../models/").company;
const { SALT_ROUNDS } = require("../config/constants");

const router = new Router();

router.post("/login", async (req, res, next) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			return res
				.status(400)
				.send({ message: "Please provide both email and password" });
		}

		const company = await Company.findOne({ where: { email } });

		if (!company || !bcrypt.compareSync(password, company.password)) {
			return res.status(400).send({
				message: "Company with that email not found or password incorrect",
			});
		}

		delete company.dataValues["password"]; // don't send back the password hash
		const token = toJWT({ companyId: company.id });
		return res.status(200).send({ token, ...company.dataValues });
	} catch (error) {
		console.log(error);
		return res
			.status(400)
			.send({ message: "Something went wrong, sorry [LOGIN]" });
	}
});

router.post("/register", async (req, res) => {
	const {
		companyName,
		name,
		surname,
		email,
		password,
		companyImageUrl,
		detailedCompanyInfo,
	} = req.body;

	if (
		!companyName ||
		!name ||
		!surname ||
		!email ||
		!password ||
		!companyImageUrl ||
		!detailedCompanyInfo
	) {
		return res.status(400).send("Please provide all details");
	}

	try {
		const newCompany = await Company.create({
			companyName,
			name,
			surname,
			email,
			password: bcrypt.hashSync(password, SALT_ROUNDS),
			companyImageUrl,
			detailedCompanyInfo,
		});

		delete newCompany.dataValues["password"]; // don't send back the password hash

		const token = toJWT({ companyId: newCompany.id });

		res.status(201).json({ token, ...newCompany.dataValues });
	} catch (error) {
		console.log("error", error);
		if (error.name === "SequelizeUniqueConstraintError") {
			return res
				.status(400)
				.send({ message: "There is an existing account with this email" });
		}

		return res
			.status(400)
			.send({ message: "Something went wrong, sorry [REGISTER" });
	}
});

// The /me endpoint can be used to:
// - get the users email & name using only their token
// - checking if a token is (still) valid
router.get("/me", authMiddleware, async (req, res) => {
	// don't send back the password hash
	delete req.company.dataValues["password"];
	res.status(200).send({ ...req.company.dataValues });
});

module.exports = router;
