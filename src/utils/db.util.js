import { Sequelize } from 'sequelize'

import { APP_CONFIG } from '../config/index.js';
const { DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, DATABASE_HOST, DIALTECT } = APP_CONFIG.DATABASE;


// Intializing the database connection
export const sequelize = new Sequelize(DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, {
    host: DATABASE_HOST,
    dialect: DIALTECT,
    logging: false,
    define: {
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at",
        paranoid: true, // soft delete the records
        underscored: true
    }
})

// Connecting to database
export const connectDatabase = async() => {
    sequelize.authenticate()
        .then(() => {
            console.log("Database connect successfully...")
        }).catch((err) => {
            console.log("Error in database connection :: \n", err.message)
            process.exit(1)
        })
}

