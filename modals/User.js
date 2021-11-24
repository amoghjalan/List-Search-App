const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId
  },
  name: {
    type: String,
    required: true
  },
  items: [String],
  address: {
    type: String
  },
  pincode: {
    type: String
  }
});

module.exports = mongoose.model("user", UserSchema);
