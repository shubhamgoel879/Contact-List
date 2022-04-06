//require library mongoose
const mongoose = require('mongoose');

// using mongoose connect to mongodb database- contacts_list_db
mongoose.connect('mongodb://localhost/contacts_list_db');

// For checking if db connected successfully.
const db=mongoose.connection;

// if error comes then we show error
db.on('error', console.error.bind(console,'error connecting to db'));


// if no error then we show success.
db.once('open',function(){
    console.log('Successfully connected to the database');
});

