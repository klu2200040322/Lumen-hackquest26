const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscriptionController');

// Create a new subscription
router.post('/subscriptions', subscriptionController.createSubscription);

// Upgrade/Downgrade subscription
router.patch('/subscriptions/:subscriptionId', subscriptionController.modifySubscription);

// Cancel subscription
router.delete('/subscriptions/:subscriptionId', subscriptionController.cancelSubscription);

// View user subscriptions
router.get('/users/:userId/subscriptions', subscriptionController.getUserSubscriptions);

module.exports = router;    