import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    email: { type: String, required: true },
    name: { type: String, required: true },
    orderId: { type: String, required: true },
    githubUsername: { type: String },
    tokenId: { type: Schema.Types.ObjectId },
  },
  { timestamps: true }
);

export const User = models.User || model("User", userSchema);
