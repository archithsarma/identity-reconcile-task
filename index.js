require('dotenv').config();
import { connectToDatabase } from './config/mysql.config';
import { app } from './express';
const PORT = 9282;

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));

(async () => {
    await Promise.all([connectToDatabase()]);
})();
