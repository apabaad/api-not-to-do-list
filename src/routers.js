import express from 'express';
const router = express.Router();

router.all('/', (req, res, next) => {
  console.log('gor hit');
  res.send('ok');
});

router;
export default router;
