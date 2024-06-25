import dotenv from "dotenv";
dotenv.config({ path: `.env.${process.env.NODE_ENV || "development"}` });

export const APP_CONFIG = {
    PORT: process.env.PORT || 5001,
    DATABASE: {
        DATABASE_NAME: process.env.DATABASE_NAME,
        DATABASE_USER: process.env.DATABASE_USER,
        DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
        DATABASE_HOST: process.env.DATABASE_HOST,
        DIALTECT: "mysql"
    },
    JWT_SECRET: process.env.JWT_SECRET
}
