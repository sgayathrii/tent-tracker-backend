import { Request, Response, NextFunction } from 'express';
import CampingService from '../services/campingService';

const campingController = {
  getAllCampingAreas: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const campingAreas = await CampingService.getAllCampingAreas();
      res.status(200).json(campingAreas);
    } catch (error) {
      next(error);
    }
  },

  bookCampingArea: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { campingAreaId, userId } = req.body;

      if (!campingAreaId || !userId) {
        return res.status(400).json({ error: 'Camping area ID and user ID are required' });
      }

      const bookingResult = await CampingService.bookCampingArea(campingAreaId, userId);

      res.status(200).json(bookingResult);
    } catch (error) {
      next(error);
    }
  },

  withdrawBooking: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { campingAreaId, userId } = req.body;

      if (!campingAreaId || !userId) {
        return res.status(400).json({ error: 'Camping area ID and user ID are required' });
      }

      const withdrawalResult = await CampingService.withdrawBooking(campingAreaId, userId);

      res.status(200).json(withdrawalResult);
    } catch (error) {
      next(error);
    }
  },
 
};

export default campingController;