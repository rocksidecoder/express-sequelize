import { Router } from "express";
import { validate } from "express-validation";

import { signIn, signUp } from "../controllers/auth.controller.js";
import { SIGN_IN, SIGN_UP } from "../validations/auth.validation.js";
import { fileUpload } from "../utils/multer.util.js";

const AuthRouter = Router();

AuthRouter.post('/sign-up', fileUpload.single('profile'), validate(SIGN_UP), signUp)
AuthRouter.post('/sign-in', validate(SIGN_IN), signIn)

export default AuthRouter;
