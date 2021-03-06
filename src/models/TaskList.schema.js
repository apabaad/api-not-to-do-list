import mongoose from "mongoose";

const TaskListSchema = mongoose.Schema(
	{
		task: {
			type: String,
			required: [true, "Task must be provided"],
			default: "chilling",
		},
		hr: {
			type: Number,
			required: true,
			default: 0,
		},
		todo: {
			type: Boolean,
			required: true,
			default: true,
		},
	},
	{
		timestamps: true,
	}
);

const TaskList = mongoose.model("Task_list", TaskListSchema);
export default TaskList;
