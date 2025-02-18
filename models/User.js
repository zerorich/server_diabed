const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    Имя: String,
    Фамилия: String,
    Отчество: String,
    "Место Учёбы/Работы": String,
    "Номер телефона": String
});

module.exports = mongoose.model("User", userSchema);
