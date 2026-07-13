const jwt = require("jsonwebtoken");
const tokenBlacklistModel = require("../model/blacklist.model");

async function authUser(req, res, next) {
	const token = req.cookies.token;

	if (!token) {
		return res.status(401).json({
			Message: "Invalid Token",
		});
	}

	const isTokenBlacklisted = await tokenBlacklistModel.findOne({ token });

	if (isTokenBlacklisted) {
		return res.staus(401).json({
			Message: "Invalid Token",
		});
	}

	try {
		const decoded = await jwt.verify(token, process.env.JWT_SECRET);

		req.user = decoded;

		next();
	} catch (err) {
		return res.staus(401).json({
			Message: "Invalid Token",
		});
	}
}

module.exports = { authUser };
