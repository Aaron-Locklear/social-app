const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  last_name: { type: String, required: true, maxLength: 100 },
  date_joined: { type: Date, default: Date.now, required: true },
});

//Virtual property for user's full name
UserSchema.virtual("name").get(function(){

  //To avoid errros atleast a an empty string will always be returned
  let fullName = "";

  fullName = `${this.first_name} ${this.last_name}`;

  return fullName;
})

module.exports = mongoose.model("User", UserSchema);