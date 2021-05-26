const mongoose = require('mongoose');
const mongoUrl = "mongodb://localhost/chat_ferparedes";

export async function connect() {
    await mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });    
}