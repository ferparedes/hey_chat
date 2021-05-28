import mongoose from 'mongoose'
const mongoUrl = "mongodb://localhost/chat_ferparedes";

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Database connected'))
    .catch(err => console.log(err));