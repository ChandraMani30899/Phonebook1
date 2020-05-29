var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    dob: { type: Date, required: true },
    mobile: { type: Number, required: true, unique: true },
    email: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', UserSchema)