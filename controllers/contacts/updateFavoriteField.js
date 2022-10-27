const Contact = require('../../models/contact');
const { RequestError } = require('../../helpers/RequestError');
const updateFavoriteSchema = require('../../schemas/schemas');

const updateFavoriteField = async (req, res, next) => {
    try {
        const { error } = updateFavoriteSchema.validate(req.body);

        if (error) {
            throw RequestError(400, "missing field favorite");
        }
        const { contactId } = req.params;
        const result = await Contact.findByIdAndUpdate(contactId, req.body, { new: true });

        if (!result) {
            throw RequestError(404, "Not found")
        }
        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
};

module.exports = updateFavoriteField;