const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname,'../public');

const app = express();

app.set('view engine','hbs');
app.set('views', path.join(__dirname, '../views'))
app.use(express.static(publicPath));


app.get('',(req,res)=>{
 res.render('index',{
    title:'Weather app',
    name : 'Keval'
 });
});

app.get('/about',(req,res)=>{
    res.render('about',{
        name:'about page D'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        message : 'this is testing'
    });
   })


// app.get('/about',(req,res)=>{
//     res.send('<h2>about page</h2>');
//    })

app.get('/weather',(req,res)=>{
    res.send({
        forecast : 42,
        location : 'Anand',
    });
   })

app.listen(3000,()=>{
    console.log('server is up');
});
