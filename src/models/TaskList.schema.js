import mongoose from 'mongoose';

// creating schema
const TaskListSchema = mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
      default: '',
    },
    hr: {
      type: Number,
      required: true,
      default: 0,
    },
    todo: {
      type: String,
      required: true,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

// creating table

const TaskList = mongoose.model('Task_list', TaskListSchema);
export default TaskList;
