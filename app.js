const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Person = require("./models/productModel");
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// POST a person
app.post('/api/users/:name', async (req, res) => {
    try {
        const { name } = req.params;
        const user = await Person.create({ name, ...req.body });
        res.status(200).json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
});

// GET a person by name
app.get('/api/users/:name', async (req, res) => {
    try {
        const { name } = req.params;
        const user = await Person.findOne({ name });
        if (!user) {
            return res.status(404).json({ message: `Cannot find any person with name ${name}` });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// UPDATE a person by name
app.put('/api/users/:name', async (req, res) => {
    try {
        const { name } = req.params;
        const updatedUser = await Person.findOneAndUpdate({ name }, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: `Cannot find any person with name ${name}` });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// DELETE a person by name
app.delete('/api/users/:name', async (req, res) => {
    try {
        const { name } = req.params;
        const deletedUser = await Person.findOneAndDelete({ name });
        if (!deletedUser) {
            return res.status(404).json({ message: `Cannot find any person with name ${name}` });
        }
        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// connect to database
mongoose
    .connect("mongodb+srv://root:JESUSu12@cluster0.spwdfxi.mongodb.net/Node-API?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(port, function () {
            console.log("Node API app is listening on port " + port);
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
