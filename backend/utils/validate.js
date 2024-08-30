const Joi = require('joi');

const validateRegister = (username , password , email) =>{
    const schema = Joi.object({
        username: Joi.string().min(3).max(30).required(),
        password: Joi.string().min(6).max(30).required(),
        email: Joi.string().email().required()
    }); 

};
const validateLogin = (username , password) =>{
    const schema = Joi.object({
        username: Joi.string().min(3).max(30).required(),
        password: Joi.string().min(6).max(30).required()
    });
};
module.exports = {validateRegister , validateLogin};

