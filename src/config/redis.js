import { createClient } from "redis";

export const redisClient = createClient({
  url: process.env.REDIS_URL,
  socket: {
    tls: true,
    reconnectStrategy: (retries) => Math.min(retries * 50, 500)
  }
});

redisClient.on("error", (err) => {
  console.error("Redis Client Error:", err);
});

await redisClient.connect();

console.log("Redis connected");