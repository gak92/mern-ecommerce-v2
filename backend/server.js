const app = require('./app');
const dotenv = require('dotenv');

// config
dotenv.config({ path: "backend/config/config.env" });

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
})