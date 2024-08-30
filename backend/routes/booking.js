const express = require('express');
const Booking = require('../models/Bookings');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

router.post('/', authMiddleware, async (req, res) => {
    const {date , ticketType , amount } = req.body;
    try{
        const newBooking = new Booking({
            userId: req.user.id,
            date,
            ticketType,
            amount
        });
        await newBooking.save();
        res.status(201).json({message: 'Booking created successfully'});
    }
    catch(err){
        res.status(400).json({message: err.message});
    }

});

