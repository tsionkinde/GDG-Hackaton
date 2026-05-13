const express = require('express');
const searchRoute = require('./routes/search'); 
const app = express();
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());

// Main DB Connection
mongoose.connect(process.env.MONGO_URI_MAIN)
    .then(() => console.log('✅ Main DB connected'))
    .catch(err => console.error('❌ Main DB error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));