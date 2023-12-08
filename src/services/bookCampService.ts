
import prisma from "../prisma";

interface BookingDetails {
  campingAreaId: number;
  name: string;
  email: string;
  phone: string;
  fromDate: string;
  toDate: string;
  numberOfPeople: number;
}

const BookCampService = {
  bookCampingArea: async (bookingDetails: BookingDetails) => {
    try {

      console.log(bookingDetails, "back")
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

  withdrawBooking: async (campingAreaId: number, userId: number) => {
    try {
      const campingArea = await prisma.campingArea.findUnique({
        where: { id: campingAreaId },
      });

      if (!campingArea || campingArea.availability) {
        return { success: false, message: 'Camping area is not booked for withdrawal' };
      }

      // Remove the booking record (this may involve another table/model)
      // Example: await prisma.booking.delete({ where: { campingAreaId, userId } });

      return { success: true, message: 'Booking withdrawn successfully' };
    } catch (error) {
      console.error('Error withdrawing booking:', error);
      return { success: false, message: 'Error withdrawing booking' };
    }
  },
};

export default BookCampService;