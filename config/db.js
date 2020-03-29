const mongoose = require('mongoose');

async function connectDB() {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    });

    console.log(`MongoDB connected ${conn.connection.host}`.green.bold);
}

module.exports = connectDB;