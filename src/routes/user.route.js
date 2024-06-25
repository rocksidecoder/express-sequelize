import { Router } from "express";
import { validate } from "express-validation";

import { getProfile, updateProfile } from "../controllers/user.controller.js";
import { USER_PROFILE } from "../validations/user.validation.js";
import { fileUpload } from "../utils/multer.util.js";

const UserRouter = Router();

UserRouter.get('/', getProfile)
UserRouter.put('/', fileUpload.single('profile'), validate(USER_PROFILE), updateProfile)

export default UserRouter;
