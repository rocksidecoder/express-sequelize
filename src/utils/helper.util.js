// Joi validation error handler
export const errorMessages = (field) => {
    return {
        "string.empty": `${field} should not be empty !!`,
        "any.required": `${field} is required !!`,
        "string.email": `Enter Valid ${field} !!`,
        "string.pattern.base": `${field} must contain only digits !!`,
        "string.length": `${field} length should be 10 digits !!`,
    };
};

