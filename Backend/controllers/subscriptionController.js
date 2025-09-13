const Subscription = require('../models/Subscription');
const User = require('../models/User');
const Plan = require('../models/Plan');

// Create a new subscription
exports.createSubscription = async (req, res) => {
  try {
    const { userId, planId, autoRenew } = req.body;
    // Check if user and plan exist
    const user = await User.findById(userId);
    const plan = await Plan.findById(planId);
    if (!user || !plan) {
      return res.status(404).json({ message: 'User or Plan not found' });
    }
    // Create subscription
    const subscription = new Subscription({
      user: userId,
      plan: planId,
      autoRenew,
      status: 'active',
      startDate: new Date(),
    });
    await subscription.save();
    res.status(201).json(subscription);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Upgrade/Downgrade subscription
exports.modifySubscription = async (req, res) => {
  try {
    const { subscriptionId } = req.params;
    const { newPlanId } = req.body;
    const subscription = await Subscription.findById(subscriptionId);
    const plan = await Plan.findById(newPlanId);
    if (!subscription || !plan) {
      return res.status(404).json({ message: 'Subscription or Plan not found' });
    }
    subscription.plan = newPlanId;
    await subscription.save();
    res.json(subscription);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Cancel subscription
exports.cancelSubscription = async (req, res) => {
  try {
    const { subscriptionId } = req.params;
    const subscription = await Subscription.findById(subscriptionId);
    if (!subscription) {
      return res.status(404).json({ message: 'Subscription not found' });
    }
    subscription.status = 'cancelled';
    subscription.endDate = new Date();
    await subscription.save();
    res.json({ message: 'Subscription cancelled', subscription });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// View user subscriptions
exports.getUserSubscriptions = async (req, res) => {
  try {
    const { userId } = req.params;
    const subscriptions = await Subscription.find({ user: userId }).populate('plan');
    res.json(subscriptions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};