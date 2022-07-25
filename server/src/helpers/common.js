import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import app from "../app.js";
import { getUserByIdDb } from "../modules/users/db.js";
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
      console.log(error, "from validate");
      return res.status(401).send({ error: "ValidationError" });
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

export const validTokenCheck = (token) => {
  const result = {
    decode: {},
    error: null,
  };
  let decoded;

  try {
    decoded = jwt.verify(token, accessKey);
  } catch (err) {
    result.error = err;
  }

  if (!decoded) {
    decoded = jwt.decode(token, accessKey);
  }
  result.decode = decoded;
  return result;
};

export const verifyUser = async (req, res, next) => {
  try {
    const accessToken = req.cookies["access-token"];
    if (!accessToken) {
      res.clearCookie("access-token");

      return res.send({
        isAuth: false,
      });
    }

    const accessTokenCheck = validTokenCheck(accessToken, "access");

    if (accessTokenCheck.error) {
      res.clearCookie("access-token");

      return res.status(401).send({ error: "Unauthorized", isAuth: false });
    }

    const id = accessTokenCheck.decode.id;
    const user = await getUserByIdDb(id);

    if (accessTokenCheck.error) {
      const refreshTokenCheck = validTokenCheck(
        user.data.refreshToken,
        "refresh"
      );
      if (refreshTokenCheck.error) {
        res.clearCookie("access-token");

        return res.status(401).send({ error: "Unauthorized", isAuth: false });
      }
    }

    res.locals.isAuth = true;
    res.locals.user = user;
    return next();
  } catch (err) {
    next(err);
  }
};
