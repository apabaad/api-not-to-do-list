import express from "express";
const app = express();

import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";

const PORT = 8000;

// Connect to the mongodb
import mongoClient from "./src/config/db.js";
mongoClient();

// middleware
app.use(express.urlencoded());
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());
app.use(helmet());

// load modules
import routers from "./src/routers.js";

app.use("/api/v1", routers);

app.use("/", (req, res) => {
	res.send("You have reached the API of not to do task application");
});

app.listen(PORT, error => {
	if (error) {
		return console.log(error);
	}

	console.log(`Server is running at http://localhost:${PORT} `);
});
