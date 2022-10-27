const express = require('express');

const router = express.Router();

const isValidId = require('../../middlewares/isValidId');

const { getAllContacts, getOneContactById, addContact, deleteContact, updateContact, updateFavoriteField } = require('../../controllers/contacts');

router.get('/', getAllContacts);

router.get('/:contactId', isValidId, getOneContactById);

router.post('/', addContact);

router.delete('/:contactId', isValidId, deleteContact);

router.put('/:contactId', isValidId, updateContact);

router.patch('/:contactId/favorite', isValidId, updateFavoriteField);

module.exports = router;


