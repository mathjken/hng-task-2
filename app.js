var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
const Person = require("./models/productModel");
var port = process.env.PORT || 5000;


app.use(express.json())
app.use(express.urlencoded({extended: false}))


//routes

// POST a person
app.post('/api', async(req, res) => {
    try {
        const users = await Person.create(req.body)
        res.status(200).json(users);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

// GET a person
app.get('/api/user_id', async(req, res) => {
    try {
        const user_id = await Person.find({});
        res.status(200).json(user_id);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get('/api/user_id/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const users = await Person.findById(id);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// UPDATE a person
app.put('/api/user_id/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await Person.findByIdAndUpdate(id, req.body);
        // Check if the user was not found in the database
        if (!updatedUser) {
            return res.status(404).json({ message: `Cannot find any person with ID ${id}` });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// DELETE a person
app.delete('/api/user_id/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await Person.findByIdAndDelete(id);
        // Check if the user was not found in the database
        if (!deletedUser) {
            return res.status(404).json({ message: `Cannot find any person with ID ${id}` });
        }
        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// connect to database
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