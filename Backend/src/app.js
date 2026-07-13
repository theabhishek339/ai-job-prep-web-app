const express = require("express");
const ConnectDB = require("./config/database");
require("dotenv").config();
const cors = require("cors");

const app = express();
const cookieParser = require("cookie-parser");
ConnectDB();

//* Calling Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		origin: "https://ai-job-prep-web-app.vercel.app",
		credentials: true,
	}),
);

//* APIs Router
const authRouter = require("./routes/auth.routes");
const interviewRouter = require("./routes/interview.routes");

// * APIs - Router
app.use("/api/auth", authRouter);
app.use("/api/interview", interviewRouter);

module.exports = app;
