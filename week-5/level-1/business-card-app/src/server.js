const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://admin:%23Mujju11@mongoassignment.fc67lig.mongodb.net/week5_cohort_assignments');

app.use(cors());
app.use(bodyParser.json());


//Database Schema
const Card = mongoose.model('Card', {
    name: String,
    description: String,
    interests: [String],
    socialMedia: {
        linkedin: String,
        twitter: String,
    }
})

//CRUD operations

app.post('/api/cards', async (req, res) => {
    try {
        const card = new Card(req.body);
        await card.save()
        res.send(card)
    } catch (error) {
        res.status(500).send(error)
    }
})

app.get('/api/cards', async (req, res) => {
    try {
        const cards = await Card.find()
        res.send(cards)
    } catch (error) {
        res.status(500).send(error)
    }
})

app.get('/api/cards/:id', async (req, res) => {
    try {
        const card = new Card.findById(req.params.id)
        if (!card) {
           return res.status(404).send("card with id not found")
        }
        res.send(card)
    } catch (error) {
        res.status(500).send(error)
    }
})

app.put('/api/cards/:id', async (req, res) => {
    try {
        const card = new Card.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!card) {
            res.status(404).send("card with id not found")
        }
        res.send(card)
    } catch (error) {
        res.status(500).send(error)
    }
})

app.delete('/api/cards/:id', async (req, res) => {
    try {
        const card = new Card.findByIdAndDelete(req.params.id)
        if (!card) {
            res.status(404).send("card with id not found")
        }
        res.send(card)
    } catch (error) {
        res.status(500).send(error)
    }
})

app.listen(PORT, ()=>{
    console.log(`listening on PORT ${PORT}`)
});