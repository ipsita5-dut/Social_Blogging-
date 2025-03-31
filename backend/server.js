const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");  // Import authentication routes
const verifyToken = require("./middlewares/authMiddleware");


const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());


// Database Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.log("❌ Database Connection Error:", err));

// Test Route
// app.get("/", (req, res) => {
//     res.send("Write_US is Running!");
// });
app.use("/api/auth", authRoutes);  // All authentication routes will be prefixed with "/api"

app.get("/api/profile", verifyToken, (req, res) => {
    res.json({ message: "Welcome to your profile", userId: req.user.userId });
  });
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
