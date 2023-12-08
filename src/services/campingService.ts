import prisma from "../prisma";

const CampingService = {
  getAllCampingAreas: async () => {
    const campingAreas = await prisma.campingArea.findMany();
    return campingAreas;
  },
  getCampingAreaById: async (id: number) => {
    const campingArea = await prisma.campingArea.findUnique({
      where: { id },
    });
    return campingArea;
  },
};

export default CampingService;