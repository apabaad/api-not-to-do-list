import express from 'express';
const router = express.Router();

import { insertTask } from './models/TaskList.model.js';
import { readTask, getSingleTask } from './models/TaskList.model.js';

router.all('/', (req, res, next) => {
  console.log('gor hit');
  // res.send('ok');
  next();
});

// returns all the task
// router.get('/', async (req, res) => {
//   const tasks = await readTask();
//   res.json({
//     tasks,
//   });
// });

// return tasks
router.get('/:_id?', async (req, res) => {
  const { _id } = req.params;
  let result = null;

  if (_id) {
    result = await getSingleTask(_id);
  } else {
    result = await readTask();
  }
  res.json({
    message: 'return from single task',
    result,
  });
});

// post task
router.post('/', async (req, res) => {
  const result = await insertTask(req.body);

  res.json({
    status: 'success',
    message: 'return from get',
    result,
  });
});

router.patch('/', (req, res) => {
  res.json({
    message: 'return from patch',
  });
});

router.delete('/', () => {});

export default router;
