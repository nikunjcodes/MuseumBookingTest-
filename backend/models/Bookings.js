const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    ticketType:{
        type: String,
        required: true
    },
    amount:{
        type: Number,
        required: true
    },
    status:{
        type: String,
        required: true
    }
    
});
module.exports = mongoose.model('Booking', BookingSchema);