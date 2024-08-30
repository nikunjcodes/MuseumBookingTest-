const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    });
mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance');
}
);
mongoose.connection.on('error', (err) => {
    console.error('Error connecting to mongo', err);
}
);

app.use('/api/auth', authRoutes);
app.use('/api/booking', bookingRoutes);
app.use('/api/payment', paymentRoutes);

const port  = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
}
);