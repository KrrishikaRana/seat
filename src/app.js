import express from "express";
import bookingRoutes from "./modules/booking/booking.route.js"

const app = express();

app.use(express.json());

// root route
app.get("/", (req, res) => {
  res.send("Seat Booking API Running 🚀");
});

app.use('/api', bookingRoutes);

export default app;