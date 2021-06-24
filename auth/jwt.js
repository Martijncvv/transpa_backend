const jwt = require("jsonwebtoken");

const jwtSecret =
	process.env.JWT_SECRET || "e9rp^&^*&@9sejg)DSUA)jpfds8394jdsfn,m";

function toJWT(data) {
	return jwt.sign(data, jwtSecret, { expiresIn: "2h" });
}

function toData(token) {
	return jwt.verify(token, jwtSecret);
}

module.exports = { toJWT, toData };
