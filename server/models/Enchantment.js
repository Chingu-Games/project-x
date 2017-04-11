var mongoose = require("mongoose");

var EnchantmentSchema = new mongoose.Schema({
  name: String,
  cost: Number,
  runFunction: String
});

module.exports = mongoose.model("Enchantment", EnchantmentSchema);
