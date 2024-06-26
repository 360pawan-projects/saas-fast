import { Schema, model, models } from "mongoose";

const emailSchema = new Schema(
  {
    from: { type: String, required: true },
    name: { type: String, required: true },
    message: { type: String, required: true },
    type: {
      type: String,
      enum: ["SUPPORT", "NEWS_LETTER", "WAITING_LIST"],
      required: true,
    },
    read: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const Email = models.Email || model("Email", emailSchema);
