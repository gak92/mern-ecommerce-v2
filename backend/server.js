const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');

// Handling uncaught Exception
process.on("uncaughtException", (err) => {
  console.log("Error: ", err.message);
  console.log("Shutting down the server due to uncaught Exception");

  process.exit(1);
})

// config
dotenv.config({ path: "backend/config/config.env" });
const PORT = process.env.PORT;

// Connect with Database
connectDatabase();


const server = app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log("Error: ", err.message);
  console.log("Shutting down the server due to unhandled Promise Rejection");

  server.close(() => {
    process.exit(1);
  })
});