const mongoose = require('mongoose');
const colors = require('colors');

// mongoose.connect() returns a promise so we can use async await 
// and store the connection in a variable and export this function.
const connectDB = async () =>{
    const conn = await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
    console.log(`MongoDB connected... ${conn.connection.host}`.cyan.underline.bold);
}

module.exports = connectDB;