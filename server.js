const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(function() { console.log('MongoDB connected'); })
    .catch(function(err) { console.error('MongoDB connection error:', err.message); });

app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
});

var PORT = process.env.PORT || 5000;
var server = app.listen(PORT, function() {
    console.log('Server running on port ' + PORT);
});

function shutdown() {
    server.close(function() {
        mongoose.connection.close();
        process.exit(0);
    });
}
process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
