import mongoose from 'mongoose'
import dotenv from 'dotenv';

dotenv.load();
const mongoUrl = `${process.env.MONGO_HOST}${process.env.MONGO_DB}${process.env.MONGO_CONNECTION_PARAMS}`;

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Database connected'))
    .catch(err => console.log(err));