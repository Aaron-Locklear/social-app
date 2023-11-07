const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  text: { type: String, required: true },
  likes: { type: Number, default: 0 },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  post: { type: Schema.Types.ObjectId, ref: 'Post', required: true }, // Reference to the associated post
  datePosted: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Comment", CommentSchema);