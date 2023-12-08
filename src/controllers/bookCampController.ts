import { Request, Response, NextFunction } from 'express';
import BookCampService from '../services/bookCampService';

const BookCampController = {
  bookCampingArea: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const bookingDetails = req.body;

      const bookingResult = await BookCampService.bookCampingArea(bookingDetails);

      res.status(200).json(bookingResult);
    } catch (error) {
      next(error);
    }
  },

};

export default BookCampController;