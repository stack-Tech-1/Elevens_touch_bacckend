const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, default: '' },
    price: { type: Number, required: true, min: 0 },
    salePrice: { type: Number },
    images: [String],
    category: { type: String, default: '' },
    stock: { type: Number, default: 0, min: 0 },
    sizes: [String],
    colors: [String],
    badge: { type: String, enum: ['new', 'sale', 'bestseller', ''], default: '' },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
