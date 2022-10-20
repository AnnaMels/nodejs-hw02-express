const getAllContacts = require('./getAllContacts');
const addContact = require('./addContact');
const deleteContact = require('./deleteContact');
const getOneContactById = require('./getOneContactById');
const updateContact = require('./updateContact');
const updateFavoriteField = require('./updateFavoriteField');

module.exports = {
    getAllContacts,
    addContact,
    deleteContact,
    getOneContactById,
    updateContact,
    updateFavoriteField
}