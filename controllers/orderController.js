const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
    const { items, shippingAddress, total, paymentReference } = req.body;

    if (!items || items.length === 0)
        return res.status(400).json({ message: 'Order must contain at least one item' });
    if (!paymentReference)
        return res.status(400).json({ message: 'Payment reference is required' });
    if (!total || total <= 0)
        return res.status(400).json({ message: 'Invalid order total' });

    try {
        const order = new Order({
            user: req.user.id,
            items,
            shippingAddress,
            total,
            paymentReference,
            paymentStatus: 'paid',
        });
        const saved = await order.save();
        res.status(201).json(saved);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to save order' });
    }
};

exports.getUserOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.id }).sort({ createdAt: -1 });
        res.json(orders);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to fetch orders' });
    }
};
