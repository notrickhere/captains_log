//---------------------------------Step 1 requires
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Log = require('./models/logs');
const Gun = require('./models/guns')
const methodOverride = require("method-override");// --->Override setting for CRUD methods
require("dotenv").config();// ---> Link our ENV variables to our app
//--------------------------------Step 2 Middleware
app.set('view engine', 'jsx')// ------> Creates Link to JSX
app.engine('jsx', require('express-react-views').createEngine())// -----> Links JSX/ReactViews to App
app.use(express.urlencoded({extended:false}));// --->Parse Req.Body
app.use(methodOverride("_method"))
app.use(express.static('public'));
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
app.get('/guns', (req,res) =>{
    Gun.find({}, (err, allguns)=>{
        console.log(err)

        res.render('IndexG', {
            guns: allguns
        })
    })
    
})
// --------->New  [C]
app.get('/logs/new', (req,res) =>{
    res.render('New', {})
})
app.get('/guns/new', (req,res) =>{
    res.render('NewG', {})
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

app.post('/guns', (req,res)=>{
    if (req.body.isGunBroken === 'on'){
        req.body.isGunBroken = true
    } else {
        req.body.isGunBroken = false
    }

    Gun.create(req.body, (err, createdGun) => {
        console.log(err)
        console.log('Just Added : ', createdGun)
    })
    res.redirect('/guns')
})
// --------> Edit
app.get("/logs/:id/edit", (req, res) => {
    Log.findById(req.params.id, (err, foundLog) => {
        //findLog
        console.log(err)
        if (!err) {
            res.render("Edit", {
                log: foundLog,
                //pass in the foundLog so we can prefill the form
            });
        } else {
            res.send({ msg: err.message });
        }
    });
});

app.get("/guns/:id/edit", (req, res) => {
    Gun.findById(req.params.id, (err, foundGun) => {
        //findGun
        console.log(err)
        if (!err) {
            res.render("EditG", {
                gun: foundGun,
                //pass in the foundGun so we can prefill the form
            });
        } else {
            res.send({ msg: err.message });
        }
    });
});
// --------->Update || Put and Patch [U]
app.put("/logs/:id", (req, res) => {
    if (req.body.shipIsBroken === "on") {
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }
    Log.findByIdAndUpdate(req.params.id, req.body, (err, updatedLog) => {
        console.log(err)
        console.log(updatedLog);
        res.redirect(`/logs/${req.params.id}`);
    });
});

app.put("/guns/:id", (req, res) => {
    if (req.body.gunIsBroken === "on") {
        req.body.gunIsBroken = true;
    } else {
        req.body.gunIsBroken = false;
    }
    Gun.findByIdAndUpdate(req.params.id, req.body, (err, updatedGun) => {
        console.log(err)
        console.log(updatedGun);
        res.redirect(`/guns/${req.params.id}`);
    });
});

// ------>DELETE   [D]
app.delete("/logs/:id", (req, res) => {
    Log.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect("/logs");
    });
});
app.delete("/guns/:id", (req, res) => {
    Gun.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect("/guns");
    });
});


// --------> SEEDS*
app.get('/logs/seed', (req, res) => {
    Log.create([
        {
            title: 'Black Beard 1',
            entry: 'returned unscathed',
            shipIsBroken: false
         },
         {
            title: 'Battle of Almedia',
            entry: 'enimies took a major hit from our surpise attack',
            shipIsBroken: false
         },
         {
            title: 'Loss of concordia',
            entry: 'our black beard ship suffered a major hit',
            shipIsBroken: true
         }
    ], (err, data) => {
        res.redirect('/logs')
    })
})

app.get('/guns/seed', (req, res) => {
    Gun.create([
        {
            manufacturer: 'Glock',
            model: 'Glock G17',
            isGunBroken: false
         },
         {
            manufacturer: 'Sig Sauer',
            model: 'P365 XL',
            isGunBroken: false
         },
         {
            manufacturer: 'Smith And Wesson',
            model: 'S&W M&P Shield M2.0',
            isGunBroken: false
         }
    ], (err, data) => {
        res.redirect('/guns')
    })
})

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

app.get('/guns/:id', (req,res)=>{
    Gun.findById(req.params.id, (err, foundGun)=>{
        console.log(err)
        console.log('Found: ', foundGun)
        res.render('ShowG', {
            gun: foundGun
        })
    })
})

app.listen('3000', () =>{
    console.log('Server is running')
})