var mongoose = require("mongoose");


//CHARACTER SCHEMA
//DEPENDS ON TOPIC SCHEMA
var CharacterSchema = new mongoose.Schema({
  name: {type: String, default: "Nanashi"},
  location:{
    plane: {type: String, enum: ["physical", "astral", "limbo"], default: "limbo"},
    x: Number,
    y: Number
  },
  description: {type: String, default: "No description yet."},
  dialogue: {type: String, default: "Text on entry goes here"}
  topics: [TopicSchema]  //can I make an array of objects for this?

});

module.exports = mongoose.model("Character", CharacterSchema);
