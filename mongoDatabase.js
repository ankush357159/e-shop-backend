//Packages import
const mongoose = require("mongoose");

const mongoDatabase = async () => {
  mongoose
    .connect(process.env.MONGODB_CLOUD, {
      useNewUrlParser: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with the server: ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(`Connection to database failed. Error:`, err);
      //console.log(process.env.MONGODB_CLOUD);
      //Above code in case of conflict in config path
    });
};

module.exports = mongoDatabase;
