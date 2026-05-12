const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    image: String,
    category: String,
    description: String,
    material: String,
    colors: [String],
    sizes: [String],
    units: { type: Number, min: 0 },
    tags: [String],
    new: Boolean,
    newArrival: Boolean,
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);