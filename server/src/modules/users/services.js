import { getUserByEmailDb } from "./db.js";
import { signToken, comparePassword } from "../../helpers/common.js";
import { getUserScore } from "./db.js";

export const signInUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await getUserByEmailDb(email);

    if (user.error || !user.data) {
      res.status(400).send({ error: "Bad Request" });
    }
    const checkPassword = await comparePassword(password, user.data.password);

    if (!checkPassword) {
      return res.status(400).send({ error: "Bad Request" });
    }
    const id = user.data.id;
    const userScore = await getUserScore(id);
    const accessToken = signToken({ id });

    res.cookie("access-token", accessToken, {
      httpOnly: true,
    });
    res.json({ user: user.data, isAuth: true, score: userScore });
    return next();
  } catch (err) {
    next(err);
  }
};

export const sendUserAuth = async (req, res, next) => {
  const { id } = res.locals.user.data;
  const userScore = await getUserScore(id);
  res.send({
    isAuth: res.locals.isAuth,
    score: userScore,
  });
};

export const signOutUser = async (req, res, next) => {
  try {
    res.clearCookie("access-token");
    res.status(200).send({ message: "User loged out" });
  } catch (err) {
    next(err);
  }
};
