import TaskSchema from "./TaskList.schema.js";

// Create Task

export const insertTask = async newTask => {
	// return TaskSchema(newTask).save()
	// 	.then(data => {
	// 		return data;
	// 	})
	// 	.catch(error => {
	// 		reject(error);
	// 		return error;
	// 	});
	try {
		const data = await TaskSchema(newTask).save(); ////
		return data;
	} catch (error) {
		return error;
	}
};

//callback
//promise
//async/await

// read all Task list
export const getTasks = async () => {
	try {
		const result = await TaskSchema.find();

		// resolve(result);
		return result;
	} catch (error) {
		return error;
		// reject(error);
	}
};

// get single task

export const getAtask = async _id => {
	try {
		const result = await TaskSchema.findById(_id);
		return result;
	} catch (error) {
		console.log(error);
		return false;
	}
};
// update task

export const updateTask = async ({ id, todo }) => {
	try {
		const result = await TaskSchema.findByIdAndUpdate(
			id,
			{
				todo,
			},
			{
				new: true,
			}
		);
		return result;
	} catch (error) {
		console.log(error);
		return false;
	}
};

//delete task
export const deleteTasks = async ids => {
	try {
		const result = await TaskSchema.deleteMany({
			_id: {
				$in: ids,
			},
		});
		return result;
	} catch (error) {
		console.log(error);
		return false;
	}
};
