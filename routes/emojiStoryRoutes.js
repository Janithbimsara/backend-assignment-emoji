const express = require("express");
const {
  create,
  getAll,
  getById,
} = require("../controllers/emojiStoryController");
const router = express.Router();

router.get("/stories", getAll);
router.get("/stories/:id", getById);
router.post("/stories", create);

module.exports = router;
