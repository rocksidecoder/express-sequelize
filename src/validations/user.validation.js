import { Joi } from "express-validation";
import { errorMessages } from "../utils/helper.util.js";

export const USER_PROFILE = {
  body: Joi.object({
    name: Joi.string().required().messages(errorMessages("name")),
    email: Joi.string().email().required().messages(errorMessages("email")),
    mobileNumber: Joi.string().required().pattern(/^[0-9]+$/).length(10).messages(errorMessages("mobileNumber"))
  })
};
