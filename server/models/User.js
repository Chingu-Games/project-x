var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
  username: {type String, required: true},
  password: {type: String, required: true},
  userRole: {type: String, enum:["player", "Admin"], default: "player"},
  resetPasswordToken: { type: String },
  resetPasswordExpires: { Type: Date },

  statistics:{ //The numbers for skill checks
    strength: {type: Number, default: 17},
    dexterity: {type: Number, default: 24},
    endurance: {type: Number, default: 20},
    reflexes: {type: Number, default: 22},
    intellect: {type: Number, default: 28},
    senses: {type: Number, default: 30}
  },

  status:{
    currentHealth: {type: Number, default: 100}, //your health currently
    currentMaxHealth: {type: Number, default: 100}, //if your max health is reduced through injury...
    absoluteMaxHealth: {type: Number, default: 100}, // Your maximum health
    currentSpell: {type: Number, default: 340},//your spell points currently
    currentMaxSpell: {type: Number, default: 340}, //if max spell points are lowered due to active enchantments...
    absoluteMaxSpell: {type: Number  default: 340}//your maximum spell points
  },

  enchantments: [String],

  known_spells: {type: [String], default: ["sparks"]}, //spells in spell list
  inventory: [String], //items in inventory

  position:{
    plane: {type: String, default: "physical", enum:["physical","astral","limbo"]},
    x: {type: Number, default: 0}, //x coordinate on map
    y: {type: Number, default: -1}, //y coordinate on map
  },

  progress:{
    checkpoint: {type: String, default: "a"},
    time: {type: Number, default: 100},
    nightTime: {type: Boolean, default: false},
    flags: [String]  //BIG TODO: Flag Schema how many flags do we need, how to make them?
  }
},
{timestamp: true}  //what is this I don't even
);

module.exports = mongoose.model("User", UserSchema);
/*
  to import, use this when you're going to create a profile:
  var User = require(__directory + './models/User')

  var newUser = new User ({
    username: Jim Bob,
    password: the_first_three_digits_of_your_dog
})

*/
