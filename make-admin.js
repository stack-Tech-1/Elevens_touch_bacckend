// Usage: node backend/make-admin.js your@email.com
require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

const email = process.argv[2];
if (!email) {
    console.error('Usage: node backend/make-admin.js your@email.com');
    process.exit(1);
}

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        const user = await User.findOneAndUpdate({ email }, { isAdmin: true }, { new: true });
        if (!user) {
            console.log(`No user found with email: ${email}`);
        } else {
            console.log(`✅ ${user.name} (${user.email}) is now an admin`);
        }
        mongoose.connection.close();
    })
    .catch(err => {
        console.error('Connection error:', err.message);
        process.exit(1);
    });
