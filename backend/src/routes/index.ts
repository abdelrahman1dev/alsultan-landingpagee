import express from 'express';
import coursesRouter from './courses/routes.ts';
import userRouter from './user/routes.ts';
import imagesRouter from './images/routes.ts';
import videosRouter from './videos/routes.ts';
import lecturesRouter from './lectures/routes.ts';

const router = express.Router();

router.use('/courses', coursesRouter);
router.use('/images', imagesRouter);
router.use('/videos', videosRouter);
router.use('/lectures', lecturesRouter);
router.use('/', userRouter);

export default router;
