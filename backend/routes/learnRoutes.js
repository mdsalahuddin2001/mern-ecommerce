const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const personSchema = Schema({
  name: String,
  age: Number,
  stories: [{ type: Schema.Types.ObjectId, ref: "Story" }],
});

const storySchema = Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "Person",
    required: [true, "Author ID is required"],
  },
  title: String,
  fans: [{ type: Schema.Types.ObjectId, ref: "Person" }],
});

const Story = mongoose.model("Story", storySchema);
const Person = mongoose.model("Person", personSchema);
const router = express.Router();

router.post("/persons", async (req, res) => {
  const person = await Person.create({
    name: req.body.name,
    age: req.body.age,
  });
  res.status(201).json(person);
});
router.get("/persons", async (req, res) => {
  const persons = await Person.find({});
  res.status(200).json(persons);
});

// story create
router.post("/stories", async (req, res) => {
  const story = await Story.create(req.body);
  const pupulatedStory = await story.populate({
    path: "author",
  });

  res.status(201).json(pupulatedStory);
});
// get stories
router.get("/stories", async (req, res) => {
  console.log(req.get("User-Agent"));
  const stories = await Story.find({ fans: "63bcbc8aad96875f0428db27" });

  res.status(200).json(stories);
});
module.exports = router;
