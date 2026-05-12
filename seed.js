const mongoose = require('mongoose');
require('dotenv').config();
const Product = require('./models/Product');

const products = [
    // ── DRESSES ──────────────────────────────────────────────────────────
    {
        title: 'Crimson Wrap Dress',
        price: 28500,
        image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80',
        category: 'Dresses',
        description: 'An elegant wrap dress in deep crimson, perfect for evening events and formal dinners.',
        material: '95% Polyester, 5% Elastane',
        colors: ['Burgundy', 'Black'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        units: 20,
        tags: ['bestseller'],
        new: false,
        newArrival: false,
    },
    {
        title: 'Ivory Maxi Dress',
        price: 34000,
        image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600&q=80',
        category: 'Dresses',
        description: 'A flowy ivory maxi dress with delicate lace detailing. Ideal for weddings and garden parties.',
        material: '100% Chiffon',
        colors: ['White', 'Blush'],
        sizes: ['S', 'M', 'L'],
        units: 15,
        tags: [],
        new: true,
        newArrival: true,
    },
    {
        title: 'Midnight Bodycon Dress',
        price: 21000,
        image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=80',
        category: 'Dresses',
        description: 'A sleek black bodycon dress that hugs your silhouette. A wardrobe essential.',
        material: '88% Nylon, 12% Spandex',
        colors: ['Black'],
        sizes: ['XS', 'S', 'M', 'L'],
        units: 30,
        tags: ['sale'],
        new: false,
        newArrival: false,
    },
    {
        title: 'Blush Sundress',
        price: 18500,
        image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80',
        category: 'Dresses',
        description: 'A light and breezy blush sundress perfect for warm days and casual outings.',
        material: '100% Cotton',
        colors: ['Blush', 'White'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        units: 25,
        tags: [],
        new: true,
        newArrival: true,
    },

    // ── TOPS ─────────────────────────────────────────────────────────────
    {
        title: 'Silk Satin Blouse',
        price: 15000,
        image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&q=80',
        category: 'Tops',
        description: 'A luxurious silk satin blouse with a relaxed fit. Pairs beautifully with tailored trousers.',
        material: '100% Silk',
        colors: ['Blush', 'White', 'Black'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        units: 18,
        tags: ['bestseller'],
        new: false,
        newArrival: false,
    },
    {
        title: 'Lace Trim Crop Top',
        price: 9500,
        image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=600&q=80',
        category: 'Tops',
        description: 'A feminine crop top with delicate lace trim at the neckline and hem.',
        material: '70% Cotton, 30% Lace',
        colors: ['White', 'Lilac', 'Blush'],
        sizes: ['XS', 'S', 'M'],
        units: 22,
        tags: [],
        new: true,
        newArrival: true,
    },
    {
        title: 'Burgundy Peplum Top',
        price: 12000,
        image: 'https://images.unsplash.com/photo-1551163943-3f7fb896e0ce?w=600&q=80',
        category: 'Tops',
        description: 'A sophisticated peplum top in deep burgundy. Great for office looks or evening wear.',
        material: '80% Polyester, 20% Rayon',
        colors: ['Burgundy', 'Black'],
        sizes: ['S', 'M', 'L', 'XL'],
        units: 14,
        tags: ['sale'],
        new: false,
        newArrival: false,
    },

    // ── ACCESSORIES ──────────────────────────────────────────────────────
    {
        title: 'Gold Chain Statement Necklace',
        price: 8500,
        image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80',
        category: 'Accessories',
        description: 'A bold layered gold chain necklace that elevates any outfit instantly.',
        material: 'Gold-plated brass',
        colors: [],
        sizes: [],
        units: 40,
        tags: ['bestseller'],
        new: false,
        newArrival: false,
    },
    {
        title: 'Silk Headband',
        price: 5500,
        image: 'https://images.unsplash.com/photo-1565793379942-c2a78e8b1bfa?w=600&q=80',
        category: 'Accessories',
        description: 'A wide silk headband in rich jewel tones. Wear it as a hair accessory or neck scarf.',
        material: '100% Silk',
        colors: ['Burgundy', 'Lilac', 'Black'],
        sizes: [],
        units: 35,
        tags: [],
        new: true,
        newArrival: true,
    },
    {
        title: 'Structured Mini Handbag',
        price: 14500,
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80',
        category: 'Accessories',
        description: 'A chic structured mini handbag with a top handle and optional crossbody strap.',
        material: 'Vegan leather',
        colors: ['Black', 'Blush', 'Burgundy'],
        sizes: [],
        units: 12,
        tags: ['sale'],
        new: false,
        newArrival: false,
    },

    // ── FOOTWEARS ────────────────────────────────────────────────────────
    {
        title: 'Strappy Heeled Sandals',
        price: 24000,
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80',
        category: 'Footwears',
        description: 'Elegant strappy heeled sandals with a delicate ankle strap. Perfect for evening looks.',
        material: 'Genuine leather upper, synthetic sole',
        colors: ['Black', 'Blush'],
        sizes: ['36', '37', '38', '39', '40', '41'],
        units: 16,
        tags: ['bestseller'],
        new: false,
        newArrival: false,
    },
    {
        title: 'Block Heel Mules',
        price: 29500,
        image: 'https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=600&q=80',
        category: 'Footwears',
        description: 'Comfortable block heel mules in rich burgundy suede. Effortlessly stylish for any occasion.',
        material: 'Suede upper, rubber sole',
        colors: ['Burgundy', 'Black'],
        sizes: ['36', '37', '38', '39', '40'],
        units: 10,
        tags: [],
        new: true,
        newArrival: true,
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
