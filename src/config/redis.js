import { createClient } from "redis";

export const redisClient = createClient({
  url: process.env.REDIS_URL,
  socket: {
    tls: true,
    connectTimeout: 10000
  }
});

redisClient.on("error", (err) => {
  console.error("Redis Client Error:", err);
});

export const connectRedis = async () => {
  try {
    await redisClient.connect();
    console.log("✅ Redis connected");
  } catch (err) {
    console.error("❌ Redis connection failed:", err);
  }
};