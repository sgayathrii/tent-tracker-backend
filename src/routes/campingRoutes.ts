import express from 'express';
import campingController from '../controllers/campingController';

const router = express.Router();

router.get('/', campingController.getAllCampingAreas);
router.get('/:id', campingController.getCampingAreaById);

export default router;