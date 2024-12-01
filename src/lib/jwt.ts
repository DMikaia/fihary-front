"use server";

import jwt from "jsonwebtoken";
const SECRET_KEY = "FIHARY";

const generateToken = async (
  email: string,
  password: string,
  role: string
) => {
  const token = jwt.sign(
    { email: email, password: password, role: role },
    SECRET_KEY,
    {
      expiresIn: "25d",
    }
  );
  return token;
};

const verifyToken = async (token: string) => {
  const payload = jwt.verify(token, SECRET_KEY);
  return payload;
};

export { generateToken, verifyToken };
