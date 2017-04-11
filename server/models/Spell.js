var mongoose = require("mongoose");

//SPELL SCHEMA, IS NESTED IN ITEM SCHEMA
//ITEM SCHEMA DEPENDS ON THIS.
var SpellSchema = new mongoose.Schema({
  spellname: String, //The spell that can be cast
  result: {
    text:{ //text displayed when casting
      type: String,
      default: "That spell cannot be cast on this item."
    },
    time:{  //time consumed upon casting
      type: Number,
      default: 0.5
    },
    runFunction: String //BIG TODO: figure out how to run functions to modify or destroy items
  }
});

module.exports = mongoose.model("Spell", SpellSchema);
