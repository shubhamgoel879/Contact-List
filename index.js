const express=require('express');
const app=express();
const path=require('path');
const db=require('./config/mongoose');


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
const contacts=[];

app.get('/delete-contact',function(req,res){
    console.log(req.query.index);
    contacts.splice(req.query.index,1);
    return res.redirect('back');
});

app.get('/',function(req,res){
    return res.render('home',{
        contacts
    });
});
app.get('/practice',function(req,res){
    return res.render('practice');
});
app.post('/contactList',function(req,res){
    // console.log(req.body);
    contacts.push(req.body);
    return res.redirect('/');
});