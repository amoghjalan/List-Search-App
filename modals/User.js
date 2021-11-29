const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  id: {
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

module.exports = mongoose.model("users", UserSchema);
