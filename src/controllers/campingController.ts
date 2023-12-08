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

  getCampingAreaById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const campingArea = await CampingService.getCampingAreaById(parseInt(id, 10));

      if (!campingArea) {
        return res.status(404).json({ message: 'Camping area not found' });
      }

      res.status(200).json(campingArea);
    } catch (error) {
      next(error);
    }
  },

};

export default campingController;