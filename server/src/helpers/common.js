import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import app from "../app.js";

const accessKey = app.get("accessKey");

export const validate = (schema) => {
  if (typeof schema !== "object" || schema === null) {
    throw new Error("Schema is not an object");
  }

  return async (req, res, next) => {
    const { body } = req;

    try {
      schema.body && (await schema.body.validateAsync(body));
      return next();
    } catch (error) {
      return next(error);
      //   return next(badRequestErrorCreator(error.details));
    }
  };
};

export const comparePassword = async (password, hashedPassword) => {
  const compareResult = await bcrypt.compare(password, hashedPassword);
  return compareResult;
};

export const signToken = (payload) => {
  const token = jwt.sign(payload, accessKey, {
    expiresIn: "1d",
  });

  return token;
};
