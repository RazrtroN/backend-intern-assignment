const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");   // 👈 MOVE HERE

dotenv.config();

const app = express();

app.use(cors());                // 👈 MOVE HERE (TOP)
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Routes
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/tasks", require("./routes/taskRoutes"));

const { protect } = require("./middleware/authMiddleware");

app.get("/api/v1/protected", protect, (req, res) => {
  res.json({
    message: "You accessed protected route!",
    user: req.user
  });
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});