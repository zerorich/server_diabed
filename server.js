const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json()); // Позволяет парсить JSON в запросах

app.use("/users", userRoutes); // Подключение маршрутов пользователей

// Подключение к MongoDB
mongoose.connect("mongodb+srv://zerorich207:4GJTyXegcznItQD6@cluster0.julfn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ Could not connect to MongoDB:", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
