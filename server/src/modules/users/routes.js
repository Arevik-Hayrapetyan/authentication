import { Router } from "express";
import { validate } from "../../helpers/common.js";
import validations from "./validations.js";
import { signInUser, sendUserAuth, signOutUser } from "./services.js";
import { verifyUser } from "../../helpers/common.js";

const router = Router();
const { loginUserSchema } = validations;

router.post("/signIn", validate(loginUserSchema), signInUser);
router.post("/signOut", signOutUser);
router.get("/auth", verifyUser, sendUserAuth);

export { router as usersRoutes };
