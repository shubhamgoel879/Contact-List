// Since we are using this file in index.js so instance of previous mongoose will be reused over here in the back.
const mongoose=require('mongoose');

const contactSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
});

//To use our Schema definition we have to convert contactSchema into model- Contact
const Contact=mongoose.model('Contact',contactSchema);
module.exports=Contact;