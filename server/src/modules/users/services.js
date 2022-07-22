// import { getUserByEmailDb } from "../modules/users/db.js";
import { getUserByEmailDb } from "./db.js";
import {
    signToken,
    comparePassword,
  } from "../../helpers/common.js";

export const signInUser = async (req, res, next) => {
    try {
      const { email, password } = req.body;
  
      const user = await getUserByEmailDb(email);
  
      if (user.error || !user.data) {
        res.status(400).send({ error: "Bad Request invalid Email "});
      }
  
      const checkPassword = await comparePassword(password, user.data.password);

      if (!checkPassword) {
        return res
          .status(400)
          .send({ error: "Bad Request"});
      }
  
      const id = user.data.id;
      const accessToken = signToken({ id });
  
      res.cookie("access-token", accessToken, {
        httpOnly: true,
      });
      return res.json({ user: user.data, isAuth: true });
    } catch (err) {
      next(err);
    }
  };