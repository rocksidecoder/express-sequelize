import { Joi } from "express-validation";
import { errorMessages } from "../utils/helper.util.js";

export const SIGN_UP = {
  body: Joi.object({
    name: Joi.string().required().messages(errorMessages("name")),
    email: Joi.string().email().required().messages(errorMessages("email")),
    password: Joi.string().required().messages(errorMessages("password")),
    mobileNumber: Joi.string().required().pattern(/^[0-9]+$/).length(10).messages(errorMessages("mobileNumber"))
  })
};

export const SIGN_IN = {
  body: Joi.object({
    email: Joi.string().email().required().messages(errorMessages("email")),
    password: Joi.string().required().messages(errorMessages("password")),
  }),
};
