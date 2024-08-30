const express = require('express');
const User = require('../models/Users');
const jwt = require('jsonwebtoken');
const router = express.Router();
const bcrypt = require('bcrypt');
const {validateRegister , validateLogin} = require('../utils/validate');


router.post('/register', async (req, res) => {
    const{username , email , password} = req.body;

    const{error} = validateRegister(req.body);
    if(error) 
     return res.status(400).send(error.details[0].message);
    try{
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser=  new User({
            username,
            email,
            password: hashedPassword
        });
        await newUser.save();
        res.status(201).json({message: 'User created successfully'});
    }catch(err){
        res.status(400).json({message: err.message});

    }
});
router.post('/login', async (req, res) => {
    const {username , password} = req.body;
    const {error} = validateLogin(req.body);
    if(error)
        return res.status(400).send(error.details[0].message);
    try{
        const user = await User.findOne({username});
        if(!user || !(await bcrypt.compare(password , user.password)))
            return res.status(400).json({message: 'Invalid username or password'});
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET , {expiresIn: '1h'});
        res.json({token});
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});
module.exports = router;