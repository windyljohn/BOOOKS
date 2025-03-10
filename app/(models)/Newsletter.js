import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const newsletterSchema = new Schema(
  {
    email: String,
  },
  { timestamps: true }
);

const Newsletters =
  mongoose.models.newsletter || mongoose.model("newsletter", newsletterSchema);

export default Newsletters;
