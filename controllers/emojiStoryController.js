const Emoji = require("../models/emojiStoryModel");

const EMOJI_TRANSLATIONS = {
  "\ud83d\ude04": "smile",
};

function translateEmoji(sequence) {
  return sequence
    .split("")
    .map((char) => EMOJI_TRANSLATIONS[char] || char)
    .join(" ");
}

const create = async (req, res) => {
  try {
    const { title, emojiSequence } = req.body;
    if (!title || !emojiSequence) {
      return res
        .status(400)
        .json({ error: "Title and emojisequence cannot be empty" });
    }
    const story = new Emoji({ title, emojiSequence });
    await story.save();
    res
      .status(201)
      .json({ message: "Story created successfully.", id: story._id });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Database error occured." });
  }
};

const getAll = async (req, res) => {
  try {
    const stories = await Emoji.find();
    res.status(200).json(stories);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Database error occured." });
  }
};

const getById = async (req, res) => {
  try {
    const story = await Emoji.findById(req.params.id);
    if (!story) {
      return res.status(404).json({ error: "Story cannot be found!" });
    }
    res.status(200).json(story);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Database error occured." });
  }
};

module.exports = { create, getAll, getById };
