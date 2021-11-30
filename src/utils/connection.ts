import mongoose from "mongoose";
const dotenv = require('dotenv')
dotenv.config()

mongoose.connect(`${process.env.CONNECTION_MOONGOSE}`, 
    {
        //useNewUrlParser: true,
        //useUnifiedTopology: true
    }
);