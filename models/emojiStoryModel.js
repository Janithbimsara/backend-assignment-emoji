const mongoose = require("mongoose");

const EmojiSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  emojiSequence: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Emoji", EmojiSchema);
