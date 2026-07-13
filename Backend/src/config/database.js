const mongoose = require("mongoose");
require("dotenv").config();

async function ConnectDB() {
	try {
		await mongoose.connect(process.env.MONGO_URI);
		console.info("Database is Connected Successfully");
	} catch (err) {
		console.log(err);
	}
}

module.exports = ConnectDB;
