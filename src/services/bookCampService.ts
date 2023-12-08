
import prisma from "../prisma";

interface BookingDetails {
  campingAreaId: number;
  name: string;
  email: string;
  phone: string;
  fromDate: Date;
  toDate: Date;
  numberOfPeople: number;
}

const BookCampService = {
  bookCampingArea: async (bookingDetails: BookingDetails) => {
    try {
      const { campingAreaId } = bookingDetails;
      const campingArea = await prisma.campingArea.findUnique({
        where: { id: campingAreaId },
      });

      if (!campingArea || !campingArea.availability) {
        return { success: false, message: 'Camping area is not available for booking' };
      }

      const booking = await prisma.booking.create({
        data: {
          ...bookingDetails,
        },
      });

      return { success: true, message: 'Camping area booked successfully', booking };
    } catch (error) {
      console.error('Error booking camping area:', error);
      return { success: false, message: 'Error booking camping area' };
    }
  },

};

export default BookCampService;