const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

// ************************ User Schema *************************//

const UserSchema = new Schema({

  password: {
    type: String,
    required: true
  },

// do I need a confirmPass here?

  username:{type:String, required:true},

  role: {
    type: String,
    enum: ['Player','Admin'],
    default: 'Player'
  },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { Type: Date }
},
{
  timestamp: true
})

 
  module.exports = mongoose.model('User', UserSchema)

