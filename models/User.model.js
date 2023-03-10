const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  userName: {
    type: String,
    unique: true
  },
  password: String
},{
  timestamps: true
});

const User = model("User", userSchema);

module.exports = User;
