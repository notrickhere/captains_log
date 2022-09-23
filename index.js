//---------------------------------Step 1 requires
const express = require('express')
const app = express()

//--------------------------------Step 2 Middleware
app.set('view engine', 'jsx')// ------> Creates Link to JSX
app.engine('jsx', require('express-react-views').createEngine())// -----> Links JSX/ReactViews to App


// ------------------------------------------[StepTwo] Routes {CRUD}
// --------->New  [C]
app.get('/new', (req,res) =>{
    res.render('New')
})
// --------> POST
// --------> Edit
// --------->Update || Put and Patch [U]
// ------>DELETE   [D]
// --------> SEEDS*
// --------->Show [R]

app.listen('3000', () =>{
    console.log('Server is running')
})