import app from "./app.js";

import { APP_CONFIG } from "./config/index.js";
import { connectDatabase } from "./utils/db.util.js";

// Connecting to database
connectDatabase()

const PORT = APP_CONFIG.PORT;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT} in ${process.env.NODE_ENV} mode.`)
})