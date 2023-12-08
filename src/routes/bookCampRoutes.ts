import express from 'express';
import BookCampController from '../controllers/bookCampController';



const router = express.Router();

router.post('/book', BookCampController.bookCampingArea);
router.post('/withdraw', BookCampController.withdrawBooking);

export default router;