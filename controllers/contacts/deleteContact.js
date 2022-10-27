const Contact = require('../../models/contact');
const { RequestError } = require('../../helpers/RequestError');

const deleteContacts = async (req, res, next) => {
    try {
        const { contactId } = req.params;
        const result = await Contact.findByIdAndRemove(contactId);
        if (!result) {
            throw RequestError(404, "Not found")
        }
        res.status(200).json({
            "message": "contact deleted"
        })
    } catch (error) {
        next(error);
    }
};

module.exports = deleteContacts;