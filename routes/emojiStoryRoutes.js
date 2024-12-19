const express = require("express");
const {
  create,
  getAll,
  getById,
  translate
} = require("../controllers/emojiStoryController");
const router = express.Router();

router.get("/stories", getAll);
router.get("/stories/:id", getById);
router.get("/stories/:id/translate", translate);
router.post("/stories", create);

module.exports = router;
