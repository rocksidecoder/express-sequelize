import pkg from "jsonwebtoken";
const { sign, verify } = pkg;

import { APP_CONFIG } from "../config/index.js";

export const signAccessToekn = (payload)=>{
    return "Bearer " + sign(payload, APP_CONFIG.JWT_SECRET, { expiresIn: "7d" })
}

export const verfiyAccessToken = (token) => {
    return verify(token, APP_CONFIG.JWT_SECRET)
}