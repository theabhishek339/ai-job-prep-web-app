const app = require("./src/app");

const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.info(`Server is running on ${PORT}`);
});
