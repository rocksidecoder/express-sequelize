import { Router } from "express";
const IndexRouter = Router();

import AuthRouter from './auth.route.js';
import UserRouter from './user.route.js';
import { isAuth } from "../middlewares/auth.middleware.js";

// Auth routes
IndexRouter.use('/auth', AuthRouter)

// User routes
IndexRouter.use('/user', isAuth, UserRouter)

export default IndexRouter;
