import { Router } from "express";
import {
  validate,
} from "../../helpers/common.js";
import validations from "./validations.js";
import { signInUser } from "./services.js";

const router = Router();
const { loginUserSchema } = validations;

router.post("/signIn", validate(loginUserSchema), signInUser);

router.get("/", (req, res) => {
  res.send("userrrrr");
});

export { router as usersRoutes };
