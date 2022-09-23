//---------------------------------Step 1 requires
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Log = require('./models/logs');
const methodOverride = require("method-override");// --->Override setting for CRUD methods
require("dotenv").config();// ---> Link our ENV variables to our app
//--------------------------------Step 2 Middleware
app.set('view engine', 'jsx')// ------> Creates Link to JSX
app.engine('jsx', require('express-react-views').createEngine())// -----> Links JSX/ReactViews to App
app.use(express.urlencoded({extended:false}));// --->Parse Req.Body
app.use(methodOverride("_method"))
// --->Instantiates MethodOverride for CRUD actions
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
    console.log("connected to mongo");
});

// ------------------------------------------[StepTwo] Routes {CRUD}
//INDEX
app.get('/logs', (req,res) =>{
    Log.find({}, (err, allLogs)=>{
        console.log(err)

        res.render('Index', {
            logs: allLogs
        })
    })
})
// --------->New  [C]
app.get('/logs/new', (req,res) =>{
    res.render('New', {})
})

// --------> POST
app.post('/logs', (req,res)=> {
    if (req.body.shipIsBroken === "on") {
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }
    
    Log.create(req.body, (err, createdLog) => {
        console.log(err);
        console.log("Just Added : ", createdLog);
    });
    
    res.redirect('/logs')
})
// --------> Edit
// --------->Update || Put and Patch [U]
// ------>DELETE   [D]
app.delete("/logs/:id", (req, res) => {
    Log.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect("/logs");
    });
});


// --------> SEEDS*
// --------->Show [R]
app.get('/logs/:id', (req,res)=>{
    Log.findById(req.params.id, (err, foundLog)=>{
        console.log(err)
        console.log('Found: ', foundLog)
        res.render('Show', {
            log: foundLog
        })
    })
})

app.listen('3000', () =>{
    console.log('Server is running')
})