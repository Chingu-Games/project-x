var mongoose = require("mongoose");

var RoomSchema = new mongoose.Schema({
  title: String,  //room title
  location:{  //plane, xy coordinates
    plane: {type: String, enum: ["physical", "astral", "limbo"]},
    x: Number,
    y: Number
  },
  lightLevel: Number,
  description:{
    first: String,  //extra text to display the first time you read the description
    standard: String, //text to display every time
    astral: String,  //extra text to display if astral perception is active
    noxie: String,  //extra text to display if noxie is following you
    light:{ //light levels range from -2 to +2, higher is brighter
      -2:{
        type: String,
        default: "It is extremely dark here, and you can barely see your hand in front of your face."
      },
      -1:{
        type: String,
        default: "It is dimly lit here."
      },
      0:{
        type: String,
        default: "It is somewhat illuminated here."
      },
      1:{
        type: String,
        default: "It is fairly bright here."
      },
      2:{
        type: String,
        default: "It is extremely bright here, and it is painful to open your eyes!"
      }
    },
    npc: String  //extra text to add if an npc is present
  }
  objects: [ItemSchema],  //array with items in it
  npcs: [characterSchema] //array with npcs in it, TODO: Make a character Schema!
});

module.exports = mongoose.model("Room", RoomSchema);
