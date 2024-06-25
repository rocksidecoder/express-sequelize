import { compare } from "bcrypt";
import models from "../models/index.model.js";
import { signAccessToekn } from "../utils/jwt.util.js";
import { getFailuerResponse, getSuccessResponse } from "../utils/response.util.js";

const { Users } = models;

/**
 * Sign up a new user   ->  /api/v1/auth/sign-up
 * @param {object} req Request object
 * @param {object} res Response object
 * @param {object} next Next function
 * @returns New user details
 */
export const signUp = async (req, res, next) => {
    try {
        const { body: payload, file } = req;

        if (file?.filename) payload.profilePicture = file.filename;

        const user = await Users.create(payload)

        return res.status(201).json(
            getSuccessResponse("User sign up successfully",{
                name: user.name,
                email: user.email,
                mobileNumber: user.mobileNumber
            })
        );
    } catch (error) {
        next(error)
    }
}

/**
 * Sign in user     -> /api/v1/auth/sign-in
 * @param {object} req Request object
 * @param {object} res Response object
 * @param {object} next Next function
 * @returns Login user details
 */
export const signIn = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // validate user 
        const user = await Users.findOne({ where: { email } });
        if (!user) return res.status(401).json(getFailuerResponse(400, "Please enter valid email !!"))

        // validate password
        const validatePassword = await compare(password, user.password);
        if (!validatePassword) return res.status(401).json(getFailuerResponse(400, "Please enter valid password !!"))

        // generate access token
        const accessToken = signAccessToekn({ id: user.id, email });

        return res.status(200).json(getSuccessResponse('User login successfully', accessToken))

    } catch (error) {
        next(error)
    }
}