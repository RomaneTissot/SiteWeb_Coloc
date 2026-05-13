const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
const PORT = 3000;

/* Connexion BDD */
connectDB();

/* Middlewares */
app.use(cors());
app.use(express.json());

/* Routes */
app.use("/api/messages", require("./routes/messages"));

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
