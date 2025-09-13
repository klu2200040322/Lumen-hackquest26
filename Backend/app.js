// app.js
const express = require('express');
require('dotenv').config();
const cors = require('cors');

// Import models and sequelize
const models = require("./src/models");
const sequelize = require("./src/config/db");

const authRoutes = require('./src/routes/auth');
const planRoutes = require('./src/routes/plans');
const subRoutes = require('./src/routes/subscriptions');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/plans', planRoutes);
app.use('/api/subscriptions', subRoutes);

app.get('/', (req, res) => res.send('TIMS Auth & API running.'));

const PORT = process.env.PORT || 4000;

async function start() {
  try {
    await sequelize.authenticate();
    console.log('DB connected');
    await sequelize.sync({ alter: true }); // good for dev
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (err) {
    console.error('Failed to start', err);
  }
}

start();
