import models from '../models/index.model.js'
import { verfiyAccessToken } from "../utils/jwt.util.js";
import { getFailuerResponse } from "../utils/response.util.js";

const { Users } = models;

export const isAuth = async (req, res, next) => {
    try {
        // check header exists or not
        if (!req.headers?.authorization?.startsWith("Bearer")) {
            return res.status(401).json(
                getFailuerResponse(401, "Missing Authorization header with bearer token !!")
            )
        }

        // validate token
        const token = req.headers.authorization.split(" ")[1];
        if (!token) {
            return res.status(401).json(
                getFailuerResponse(401, "Invalid access token!!")
            )
        }

        // verify access token
        const decoded = verfiyAccessToken(token);

        // validate user
        const user = await Users.findByPk(decoded.id)
        if (!user) {
            return res.status(403).json(
                getFailuerResponse(403, "Unauthorized access !!")
            )
        }

        req.user = user
        return next()
    } catch (error) {
        next(error)
    }
}
