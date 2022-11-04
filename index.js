const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const auth = require('./routes/api/auth');
const roomDetails=require('./routes/api/roomDetails');

const app = express();

//Connect Database
connectDB();

//INIT Middleware
app.use(express.json({extended: false}));

app.get('/', (req, res) => res.send('Hello World'));

// Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);
app.use('/api/auth', auth);
app.use('/api/roomDetails',roomDetails);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
