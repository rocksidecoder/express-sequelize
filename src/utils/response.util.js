// Success response format
export const getSuccessResponse = (message, data) => {
    const resposne = { status: "success", message }

    if (data) resposne.data = data;
    return resposne
}

// Failuer response format
export const getFailuerResponse = (statusCode, message) => {
    return {
        status: "error",
        error: {
            statusCode,
            message
        }
    }
}
