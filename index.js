const mongoose = require('mongoose');
const ComplaintModel = require('./models/complaintModel');
const express = require('express');
const app = express();
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/views/assets/css'));
app.use(express.static(__dirname + '/views/assets/images'));
app.use(express.static(__dirname + '/views/assets/js'));
app.set('view engine', 'ejs');

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


//create server
app.get('/', (req, res) => {
    //render page
    res.render('index.ejs');
})

app.get('/index', (req, res) => {
    //render page
    res.render('index.ejs');
})

app.get('/complaints', (req, res) => {
    

    //render page
    res.render('complaints.ejs');
});

app.get('/data', (req, res) => {

    ComplaintModel.find({}, function(err, complaints) {
        res.render('data.ejs', {
            complaintData: complaints
        })
    })
    
});

app.post('/complaints', (req, res) => {
   const complaints = ComplaintModel({
       fName: req.body.firstName,
       lName: req.body.lName,
       company: req.body.company,
       email: req.body.email,
       phoneNumber: req.body.pNum,
       message: req.body.messagebox
   })

   complaints.save().then((document) => {
       console.log(document);
   });

   res.render('complaints.ejs')
});



// app.get('/complaints', (req, res) => {
   
// })




mongoose.connect('mongodb+srv://acity:webtech@exams.xrbci.mongodb.net/benedict', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    

}).catch(() => {
    console.log('Error connecting to database...')
})

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));