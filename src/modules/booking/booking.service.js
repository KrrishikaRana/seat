import { redisClient } from "../../config/redis.js";
import { acquireLock, releaseLock } from "../../utils/lock.util.js";

export const bookSeatService = async (seatId) => {

  const lockKey = `lock:seat:${seatId}`;
  const seatKey = `seat:${seatId}`;

  const lock = await acquireLock(lockKey);

  if (!lock) {
    return { message: "Seat is currently being booked by someone else." };
  }

  try {

    const seatBooked = await redisClient.get(seatKey);

    if (seatBooked) {
      return { message: "Seat already booked." };
    }

    await redisClient.set(seatKey, "booked");

    return { message: `Seat ${seatId} booked successfully.` };

  } finally {
    await releaseLock(lockKey);
  }
};