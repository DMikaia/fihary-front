"use server";

import { Token } from "../constants/type";
import jwt from "jsonwebtoken";

const SECRET_KEY = "TRIMOBExfihary";

const verifyToken = async (token: string): Promise<Token> => {
  const payload = jwt.verify(token, SECRET_KEY);
  return payload as Token;
};

export { verifyToken };
