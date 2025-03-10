import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const bookSchema = new Schema(
  {
    title: String,
    author: String,
    image: String,
    price: Number,
    category: [String],
    tags: [String],
    series: String,
    blurb: String,
  },
  { versionKey: false }
);

const Books = mongoose.models.books || mongoose.model("books", bookSchema);

export default Books;
