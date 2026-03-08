import 'dotenv/config';
import app from "./app.js";
import { connectRedis } from "./config/redis.js";

const PORT = process.env.PORT || 3000;

connectRedis();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});