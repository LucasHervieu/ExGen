const mongoose = require('mongoose');

var client;
const uri = "mongodb+srv://lucas:Sameri1984@cluster0.v99qibd.mongodb.net/fullStack";

async function connect() {
    return mongoose
        .connect(uri)
        .then(() => {
            console.log("Database connected");

        })
        .catch((error) => {
            console.log("db error",error);
            process.exit(1)
        })
}
module.exports = {

    connect,

}



