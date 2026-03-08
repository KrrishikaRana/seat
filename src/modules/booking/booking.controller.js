import { bookSeatService } from './booking.service.js';


export const bookSeatController = async (req, res) => {
  try {
    const { seatId } = req.params;

    const result = await bookSeatService(seatId);

    res.status(result.status || 200).json({
      message: result.message
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal Server Error"
    });
  }
};