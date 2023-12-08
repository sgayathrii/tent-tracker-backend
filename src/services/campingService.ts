import prisma from "../prisma";

const CampingService = {
  getAllCampingAreas: async () => {
    const campingAreas = await prisma.campingArea.findMany();
    return campingAreas;
  },

  bookCampingArea: async (campingAreaId: number, userId: number) => {
    try {
      const campingArea = await prisma.campingArea.findUnique({
        where: { id: campingAreaId },
      });

      if (!campingArea || !campingArea.availability) {
        return { success: false, message: 'Camping area is not available for booking' };
      }

      await prisma.campingArea.update({
        where: { id: campingAreaId },
        data: { availability: false },
      });

      // Create a booking record (this may involve another table/model)
      // Example: await prisma.booking.create({ data: { campingAreaId, userId } });

      return { success: true, message: 'Camping area booked successfully' };
    } catch (error) {
      console.error('Error booking camping area:', error);
      return { success: false, message: 'Error booking camping area' };
    }
  },

  withdrawBooking: async (campingAreaId: number, userId: number) => {
    try {
      const campingArea = await prisma.campingArea.findUnique({
        where: { id: campingAreaId },
      });

      if (!campingArea || campingArea.availability) {
        return { success: false, message: 'Camping area is not booked for withdrawal' };
      }

      // Update camping area availability
      await prisma.campingArea.update({
        where: { id: campingAreaId },
        data: { availability: true },
      });

      // Remove the booking record (this may involve another table/model)
      // Example: await prisma.booking.delete({ where: { campingAreaId, userId } });

      return { success: true, message: 'Booking withdrawn successfully' };
    } catch (error) {
      console.error('Error withdrawing booking:', error);
      return { success: false, message: 'Error withdrawing booking' };
    }
  },
 
};

export default CampingService;