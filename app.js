var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Book =require("./Book.model");
var port = process.env.PORT || 5000;
//var db = 'mongodb://localhost/example';

app.use(express.json())

// CREATE (Add a new person)
app.post('/api', (req, res) => {
	const { name } = req.body;
	const person = new Person({ name });
	person.save((err) => {
	  if (err) {
		return res.status(500).json({ error: 'Failed to add person' });
	  }
	  return res.status(201).json(person);
	});
  });


// READ (Fetch details of a person by ID)
app.get('/api/:id', (req, res) => {
	const id = req.params.id;
	Person.findById(id, (err, person) => {
	  if (err) {
		return res.status(500).json({ error: 'Failed to fetch person' });
	  }
	  if (!person) {
		return res.status(404).json({ error: 'Person not found' });
	  }
	  return res.status(200).json({ id, name: person.name });
	});
  });

// UPDATE (Modify details of an existing person by ID)
app.put('/api/:id', (req, res) => {
	const id = req.params.id;
	const { name } = req.body;
	Person.findByIdAndUpdate(id, { name }, { new: true }, (err, person) => {
	  if (err) {
		return res.status(500).json({ error: 'Failed to update person' });
	  }
	  if (!person) {
		return res.status(404).json({ error: 'Person not found' });
	  }
	  return res.status(200).json({ id, name: person.name });
	});
  });
  
  // DELETE (Remove a person by ID)
  app.delete('/api/:id', (req, res) => {
	const id = req.params.id;
	Person.findByIdAndRemove(id, (err, person) => {
	  if (err) {
		return res.status(500).json({ error: 'Failed to delete person' });
	  }
	  if (!person) {
		return res.status(404).json({ error: 'Person not found' });
	  }
	  return res.status(204).send();
	});
  });

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
