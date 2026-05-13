const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

/* GET - récupérer tous les messages */
router.get("/", async (req, res) => {
  try {
    const messages = await Message.find().sort({ date: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
});

/* POST - ajouter un message */
router.post("/", async (req, res) => {
  try {
    const { author, message } = req.body;

    if (!author || !message) {
      return res.status(400).json({ error: "Champs manquants" });
    }

    const newMessage = new Message({ author, message });
    await newMessage.save();

    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
});

module.exports = router;
