const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const subscriptionRoutes = require('./routes/subscriptionRoutes');

const app = express();

// Load environment variables
require('dotenv').config();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', subscriptionRoutes);

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Subscription Management API is running!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
