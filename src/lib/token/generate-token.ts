import jwt from "jsonwebtoken";

export const generateToken = () => {
  return jwt.sign({}, process.env.INVITATION_TOKEN_SECRET);
};
