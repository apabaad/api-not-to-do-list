import TaskListSchema from './TaskList.schema.js';

// create task

export const insertTask = async (newTask) => {
  //   return new Promise((resolve, reject) => {
  //     TaskListSchema(newTask)
  //       .save()
  //       .then((data) => {
  //         console.log(data);
  //         resolve(data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   });

  try {
    const data = await TaskListSchema(newTask).save();
    return data;
  } catch (error) {
    return error;
  }
};

// read all task list

export const readTask = async () => {
  try {
    const result = await TaskListSchema.find();
    return result;
  } catch (error) {
    return error;
  }
};

// get single task

export const getSingleTask = async (_id) => {
  try {
    const result = await TaskListSchema.findById(_id);
    return result;
  } catch (error) {
    return error;
  }
};
// update task
export const updateTask = async ({ id, todo }) => {
  try {
    const result = await TaskListSchema.findByIdAndUpdate(
      id,
      {
        todo,
      },
      {
        new: true, //to get the recently updated data
      }
    );
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

// delete task
export const deleteTasks = async (ids) => {
  console.log(ids);
  try {
    const result = await TaskListSchema.deleteOne(ids);
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};
