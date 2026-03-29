const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

app.use("/api/v1/auth", require("./routes/authRoutes"));

const { protect } = require("./middleware/authMiddleware");

app.get("/api/v1/protected", protect, (req, res) => {
  res.json({
    message: "You accessed protected route!",
    user: req.user
  });
});

app.use("/api/v1/tasks", require("./routes/taskRoutes"));