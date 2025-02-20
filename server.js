const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json()); // Позволяет парсить JSON в запросах

app.use("/users", userRoutes); // Подключение маршрутов пользователей
import dns from 'dns';

// Подключение к MongoDB
mongoose.connect("mongodb+srv://zerorich207:zerorich207aliasi@cluster0.julfn.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ Could not connect to MongoDB:", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
import dns from 'dns';

dns.lookup(require('os').hostname(), (err, address) => {
    if (err) {
        console.error('Ошибка получения IP:', err);
    } else {
        console.log('IP-адрес сервера:', address);
    }
});
