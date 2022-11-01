const { User } = require('../../models/user');
const { RequestError } = require('../../helpers');
const { schemas } = require('../../schemas/schemas');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = process.env;


const login = async (req, res, next) => {
    try {
        const { error } = schemas.loginSchema.validate(req.body);
        if (error) {
            throw RequestError(400, error.message);
        };

        const { email, password, subscription } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            throw RequestError(401, "Email or password is wrong")
        };

        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            throw RequestError(401, "Email or password is wrong")
        };

        const payload = {
            id: user._id,
        }

        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '24h' });
        await User.findByIdAndUpdate(user._id, { token, subscription })
        res.json({
            token,
            "user": {
                email,
                subscription,
            }
        });


    } catch (error) {
        next(error);
    }
};

module.exports = login;