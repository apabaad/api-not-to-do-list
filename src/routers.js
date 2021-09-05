import express from "express";
const router = express.Router();

import {
	insertTask,
	getTasks,
	getAtask,
	deleteTasks,
	updateTask,
} from "./models/TaskList.model.js";

router.all("/", (req, res, next) => {
	console.log("got hit");
	// res.send("ok");
	next();
});

// returns all the task
router.get("/:_id?", async (req, res) => {
	const { _id } = req.params;
	let result = null;

	if (_id) {
		result = await getAtask(_id);
	} else {
		result = await getTasks();
	}

	res.json({
		message: "return from get",
		result,
	});
});

// receives new task and stores in the database
router.post("/", async (req, res) => {
	try {
		const result = await insertTask(req.body);
		console.log(result, "from router");

		res.json({
			status: "success",
			message: "return from post",
			result,
		});
	} catch (error) {
		console.log(error.message);
		res.json({
			status: "error",
			message: "Unable to add the ticket, please try again later",
		});
	}
});

// update the data in the database
router.patch("/", async (req, res) => {
	console.log(req.body);
	const result = await updateTask(req.body);

	if (result._id) {
		return res.json({
			status: "success",
			message: "Task has been updated",
			result,
		});
	}

	res.json({
		status: "error",
		message: "Unable to update the task, plz try again later",
	});
});

// delete data based on the ids received
router.delete("/", async (req, res) => {
	const { ids } = req.body;
	console.log(ids);

	const result = await deleteTasks(ids);
	console.log(result);

	if (result?.deletedCount > 0) {
		return res.json({
			status: "success",
			message: "The task has been deleted",
		});
	}

	res.json({
		status: "error",
		message: "Unable to delete the item, please try again later.",
	});
});

export default router;
