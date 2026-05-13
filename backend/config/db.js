const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://violetteleussot_db_user:gXCZZTwexjGUvEnn@cluster0.t2k1ez8.mongodb.net/?appName=Cluster0');
    console.log("MongoDB connecté");
  } catch (error) {
    console.error("Erreur MongoDB :", error);
    process.exit(1);
  }
};

module.exports = connectDB;
