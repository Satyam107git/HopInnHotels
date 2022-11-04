const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  userId: {
    type:  String,
    required: true,
    unique: true
  }, 
 
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
