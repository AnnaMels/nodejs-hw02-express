const Joi = require("joi");

const emailRegexp = /^[a-zA-Z0-9.!#$%&' * +/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const addSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.number().required(),
});

const updateFavoriteSchema = Joi.object({
    favorite: Joi.boolean().required(),
});

const registerSchema = Joi.object({
    password: Joi.string().required(),
    email: Joi.string().pattern(emailRegexp).required(),
    subscription: Joi.string().required(),
});

const loginSchema = Joi.object({
    password: Joi.string().required(),
    email: Joi.string().pattern(emailRegexp).required(),
    subscription: Joi.string().required(),
});


const schemas = {
    addSchema,
    updateFavoriteSchema,
    registerSchema,
    loginSchema,
}

module.exports = {
    schemas
};
