const mongoose = require('mongoose');

const connectDatabase = () => {
  DB_URI = process.env.DB_URI;

  mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then((data) => {
    console.log(`Mongodb connected with server: ${data.connection.host} `);
  })
  .catch((err) => {
    console.log(err);
  });
}

module.exports = connectDatabase;