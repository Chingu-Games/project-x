var mongoose = require("mongoose");


//ITEM SCHEMA, THIS IS THE MAIN ONE
//OPTIONS ARE EXAMINE, CAST SPELL, USE, TAKE
//REQUIRES SPELL SCHEMA, WHICH IS NESTED INSIDE
var ItemSchema = new mongoose.Schema({

//EXAMINE
  examine:{
    text:{ //text displayed when you examine it
      type: String,
      default: "Description missing or not made yet!  Sorry, Charlie!!"
    },
    astral: String,  //extra text if astral perception is active
    knowledge: String, //extra text if you pass a knowledge check
    time:{  //time consumed upon examining
      type: Number,
      default: 0.5
    }
  },

//CAST SPELL
  cast: [SpellSchema], //refers to the spell schema, lists the spells that give some result
  concentrate:{  //What happens when you concentrate on the item
    type: String,
    default: "You feel no astral resonance from this item."  //if you can't concentrate
  },

//USE
  use:{
    canUse: Boolean,
    result: {
      text:{ //text displayed when using
        type: String,
        default: "You cannot use this item."  //If you're unable to use the item
      },
      time:{  //time consumed upon using
        type: Number,
        default: 0.5
      }
      //what to do to the room when using
      runFunction: String //BIG TODO: figure out how to run functions to modify or destroy items
    }
  },

  //TAKE
  take:{
    canTake: Boolean,
    result:{
      text:{
        type: String,
        default: "You cannot take this with you."
      },
      time:{
        type:Number,
        default: .5
      },
      runFunction: String
    }
  }

})

module.exports = mongoose.model("Item", ItemSchema);
