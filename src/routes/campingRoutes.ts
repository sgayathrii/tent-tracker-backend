import express from 'express';
import campingController from '../controllers/campingController';

const router = express.Router();

router.get('/', campingController.getAllCampingAreas);
router.post('/book', campingController.bookCampingArea);
router.post('/withdraw', campingController.withdrawBooking);

export default router;