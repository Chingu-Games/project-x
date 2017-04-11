var mongoose = require("mongoose");


//TOPIC SCHEMA, REQUIRED BY CHARACTER SCHEMA
var TopicSchema = new mongoose.Schema({
  topic: String,
  text: String,
  unlockedOn: String
});

module.exports = mongoose.model("Topic", TopicSchema);
