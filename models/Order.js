const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [
        {
            productId: String,
            title: String,
            price: Number,
            quantity: Number,
            image: String,
        },
    ],
    shippingAddress: {
        fullName: String,
        email: String,
        phone: String,
        address: String,
        city: String,
        state: String,
    },
    total: { type: Number, required: true },
    paymentReference: { type: String, required: true },
    paymentStatus: { type: String, enum: ['pending', 'paid', 'failed'], default: 'paid' },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
