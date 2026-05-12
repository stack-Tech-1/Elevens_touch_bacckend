const mongoose = require('mongoose');
require('dotenv').config();
const Product = require('./models/Product');

const products = [
    // ── DRESSES ──────────────────────────────────────────────────────────
    {
        name: 'Crimson Wrap Dress',
        price: 28500,
        images: ['https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80'],
        category: 'dress',
        description: 'An elegant wrap dress in deep crimson, perfect for evening events and formal dinners.',
        colors: ['Burgundy', 'Black'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        stock: 20,
        badge: 'bestseller',
    },
    {
        name: 'Ivory Maxi Dress',
        price: 34000,
        images: ['https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600&q=80'],
        category: 'dress',
        description: 'A flowy ivory maxi dress with delicate lace detailing. Ideal for weddings and garden parties.',
        colors: ['White', 'Blush'],
        sizes: ['S', 'M', 'L'],
        stock: 15,
        badge: 'new',
    },
    {
        name: 'Midnight Bodycon Dress',
        price: 21000,
        salePrice: 16500,
        images: ['https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=80'],
        category: 'dress',
        description: 'A sleek black bodycon dress that hugs your silhouette. A wardrobe essential.',
        colors: ['Black'],
        sizes: ['XS', 'S', 'M', 'L'],
        stock: 30,
        badge: 'sale',
    },
    {
        name: 'Blush Sundress',
        price: 18500,
        images: ['https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80'],
        category: 'dress',
        description: 'A light and breezy blush sundress perfect for warm days and casual outings.',
        colors: ['Blush', 'White'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        stock: 25,
        badge: 'new',
    },

    // ── TOPS ─────────────────────────────────────────────────────────────
    {
        name: 'Silk Satin Blouse',
        price: 15000,
        images: ['https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&q=80'],
        category: 'top',
        description: 'A luxurious silk satin blouse with a relaxed fit. Pairs beautifully with tailored trousers.',
        colors: ['Blush', 'White', 'Black'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        stock: 18,
        badge: 'bestseller',
    },
    {
        name: 'Lace Trim Crop Top',
        price: 9500,
        images: ['https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=600&q=80'],
        category: 'top',
        description: 'A feminine crop top with delicate lace trim at the neckline and hem.',
        colors: ['White', 'Lilac', 'Blush'],
        sizes: ['XS', 'S', 'M'],
        stock: 22,
        badge: 'new',
    },
    {
        name: 'Burgundy Peplum Top',
        price: 12000,
        salePrice: 9000,
        images: ['https://images.unsplash.com/photo-1551163943-3f7fb896e0ce?w=600&q=80'],
        category: 'top',
        description: 'A sophisticated peplum top in deep burgundy. Great for office looks or evening wear.',
        colors: ['Burgundy', 'Black'],
        sizes: ['S', 'M', 'L', 'XL'],
        stock: 14,
        badge: 'sale',
    },

    // ── ACCESSORIES ──────────────────────────────────────────────────────
    {
        name: 'Gold Chain Statement Necklace',
        price: 8500,
        images: ['https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80'],
        category: 'accessory',
        description: 'A bold layered gold chain necklace that elevates any outfit instantly.',
        colors: ['Gold'],
        sizes: [],
        stock: 40,
        badge: 'bestseller',
    },
    {
        name: 'Silk Headband',
        price: 5500,
        images: ['https://images.unsplash.com/photo-1565793379942-c2a78e8b1bfa?w=600&q=80'],
        category: 'accessory',
        description: 'A wide silk headband in rich jewel tones. Wear it as a hair accessory or neck scarf.',
        colors: ['Burgundy', 'Lilac', 'Black'],
        sizes: [],
        stock: 35,
        badge: 'new',
    },
    {
        name: 'Structured Mini Handbag',
        price: 14500,
        salePrice: 11000,
        images: ['https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80'],
        category: 'accessory',
        description: 'A chic structured mini handbag with a top handle and optional crossbody strap.',
        colors: ['Black', 'Blush', 'Burgundy'],
        sizes: [],
        stock: 12,
        badge: 'sale',
    },

    // ── OUTERWEAR ────────────────────────────────────────────────────────
    {
        name: 'Strappy Heeled Sandals',
        price: 24000,
        images: ['https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80'],
        category: 'outerwear',
        description: 'Elegant strappy heeled sandals with a delicate ankle strap. Perfect for evening looks.',
        colors: ['Black', 'Blush'],
        sizes: ['36', '37', '38', '39', '40', '41'],
        stock: 16,
        badge: 'bestseller',
    },
    {
        name: 'Block Heel Mules',
        price: 29500,
        images: ['https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=600&q=80'],
        category: 'outerwear',
        description: 'Comfortable block heel mules in rich burgundy suede. Effortlessly stylish for any occasion.',
        colors: ['Burgundy', 'Black'],
        sizes: ['36', '37', '38', '39', '40'],
        stock: 10,
        badge: 'new',
    },
];

async function seed() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ MongoDB connected');

        await Product.deleteMany({});
        console.log('🗑️  Cleared existing products');

        await Product.insertMany(products);
        console.log(`✅ ${products.length} products seeded successfully`);
    } catch (err) {
        console.error('❌ Seed failed:', err);
        process.exit(1);
    } finally {
        await mongoose.connection.close();
        process.exit(0);
    }
}

seed();
