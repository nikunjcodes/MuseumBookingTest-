const express = require('express');
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_KEY);
const Booking = require('../models/Bookings');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const {sendConfirmationEmail} = require('../utils/email');

router.post('/' , authMiddleware , async (req , res) => {
    const{bookingId , paymentMethodId} = req.body;
    try{
        const booking = await Booking.findById({bookingId});
        if(!booking || booking.userId.toString() !== req.user.id){
            return res.status(404).json({message: 'Booking not found'});
        }
        const paymentIntent = await stripe.paymentIntents.create({
            amount: booking.amount * 100,
            currency: 'usd',
            payment_method: paymentMethodId,
            confirm: true
        });
        bookingStatus = 'paid';
        booking.paymentId = paymentIntent.id;
        await booking.save();
        await sendConfirmationEmail(req.user.email , booking);
        res.json({message: 'Payment successful'});


    }
    catch(err){
        res.status(400).json({message: err.message});
    }
});
module.exports = router;
