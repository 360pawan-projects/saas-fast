import { Schema, model, models } from "mongoose";

const tokenSchema = new Schema(
  {
    token: { type: String, required: true },
  },
  { timestamps: true }
);

export const Token = models.Token || model("Token", tokenSchema);
