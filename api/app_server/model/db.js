const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dbbuku'
).then(() => {
    console.log('Connected to database');
}).catch((err) => {
    console.log('Connection failed');
});