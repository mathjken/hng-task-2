var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
const Person = require("./models/productModel");
var port = process.env.PORT || 5000;

app.use(express.json())
app.use(express.urlencoded({extended: false}))


//routes

// POST
app.post('/api', async(req, res) => {
    try {
        const users = await Person.create(req.body)
        res.status(200).json(users);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

// GET
app.get('/', (req, res) => {
    res.send('Hello my name is Johnkennedy')
})
app.get('/api/users', async(req, res) => {
    try {
        const users = await Person.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get('/api/users/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const users = await Person.findById(id);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// update a person
app.put('/api/users/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const users = await Person.findByIdAndUpdate(id, req.body);
        // we cannot find any product in database
        if(!person){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        const updatedPerson = await Person.findById(id);
        res.status(200).json(updatedPerson);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// delete a product
app.delete('/api/users/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const users = await Person.findByIdAndDelete(id);
        if(!person){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        res.status(200).json(users);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


mongoose.set('strictQuery', false)
mongoose
.connect("mongodb+srv://root:JESUSu12@cluster0.spwdfxi.mongodb.net/Node-API?retryWrites=true&w=majority")
.then(() => {
	console.log('connected to mongoDB')
	app.listen(port, function() {
		console.log("Node API app is listening on port" + port);
	});
}).catch(() => {
	console.log(error)
})