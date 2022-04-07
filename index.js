const express=require('express'); // express will make coding of creating servers, listening and getting url easy
const app=express();
const path=require('path');
const db=require('./config/mongoose');
const Contact=require('./models/contact');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));     // set path to views folder.
app.use(express.urlencoded());                     // middleware used for handling post requests, its puts the form data in req.body
app.use(express.static('assets'));                 // attach static folder assets having css etc.



// app.use(function(req,res,next){
//     console.log('Middleware 1-');
//     next();
// });
// app.use(function(req,res,next){
//     console.log('Middleware 2-');
//     next();
// });

app.listen(8000, function(err){
    if(err){
        console.log('Error');
        return;
    }
    console.log('Server is up and running at 8000');
})




//const contacts=[];

app.get('/delete-contact',function(req,res){
    // console.log(req.query.index);
    // contacts.splice(req.query.index,1);
    Contact.findByIdAndDelete(req.query.id,function(err){
        if(err){
            console.log('Error on deleting contact');
            return;
        }
        else{
            return res.redirect('back');
        }
    });
});

app.get('/',function(req,res){
    Contact.find({},function(err,contacts){     // We leave bracket empty as we need all entries and it put that in contacts array. 
        if(err){
            console.log('Error while finding contacts in db');
            return;
        }
        else{
            return res.render('home',{
                contact_list:contacts
            });
        }
    });
});


app.post('/contactList',function(req,res){
    // console.log(req.body);
    // contacts.push(req.body);
    Contact.create({
        name:req.body.name,
        phone:req.body.phone
    },function(err,newcontact){         // here newcontact is variable which print the complete entry of contact in table. or print that document
        if(err){
            console.log('Error in creating contact');
        }
        else{
            console.log('********',newcontact);   
        }
    });
    return res.redirect('back');
});