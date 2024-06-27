import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Schema, model, models, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  // refreshToken?: string;
  // emailToken?: string;
  // isVerifiedEmail: boolean;

  isPasswordCorrect(password: string): Promise<boolean>;
  // generateAccessToken(): string;
  // generateRefreshToken(): string;
  // generateEmailToken(): string;
}

const userSchema = new Schema(
  {
    name: { type: String, required: true, lowercase: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: { type: String, required: true },
    // isVerifiedEmail: {
    //   type: Boolean,
    //   default: false,
    // },
    // refreshToken: {
    //   type: String,
    // },
    // emailToken: {
    //   type: String,
    // },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

// userSchema.methods.generateAccessToken = function () {
//   return jwt.sign(
//     {
//       _id: this._id,
//       email: this.email,
//       username: this.username,
//       fullName: this.fullName,
//     },
//     process.env.ACCESS_TOKEN_SECRET,
//     {
//       expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
//     }
//   );
// };

// userSchema.methods.generateRefreshToken = function () {
//   return jwt.sign(
//     {
//       _id: this._id,
//     },
//     process.env.REFRESH_TOKEN_SECRET,
//     {
//       expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
//     }
//   );
// };

// userSchema.methods.generateEmailToken = function () {
//   return jwt.sign({ _id: this._id }, process.env.EMAIL_TOKEN_SECRET, {
//     expiresIn: process.env.EMAIL_TOKEN_EXPIRY,
//   });
// };

export const User = models.User || model("User", userSchema);
