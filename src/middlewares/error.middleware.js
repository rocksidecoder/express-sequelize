import { ValidationError } from "express-validation";
import { getFailuerResponse } from "../utils/response.util.js";
import { removeImage } from "../utils/multer.util.js";
import { UniqueConstraintError } from "sequelize";

// Get validation error messages 
function getErrorMessage(err) {
    const { params, query, body } = err.details;

    if (params?.length) return params[0].message
    if (query?.length) return query[0].message
    if (body?.length) return body[0].message
}

// Error handler for unknown routes
export const notFoundHandler = (req, res, next) => {
    return next({ status: 400, message: "Resource not found !" })
}

// Global Error handler
export const mainErrorHandler = async (err, req, res, next) => {
    let { status = 500 } = err;
    let message = err.message || "Something went wrong!"

    if (err instanceof ValidationError) {
        if(req?.file?.filename) await removeImage(req.file.filename)

        const message = getErrorMessage(err);
        return res.status(400).json(getFailuerResponse(400, message))
    }
    else if(err instanceof UniqueConstraintError){
        const message = err.errors[0].message;
        return res.status(409).json(getFailuerResponse(409, message))
    }
    else {
        return res.status(status).json(getFailuerResponse(status, message))
    }
}