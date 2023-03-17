const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');

// config
dotenv.config({ path: "backend/config/config.env" });
const PORT = process.env.PORT;

// Connect with Database
connectDatabase();


app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
})