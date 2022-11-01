const express = require('express');

const router = express.Router();

const isValidId = require('../../middlewares/isValidId');
const authenticate = require('../../middlewares/authenticate');

const { getAllContacts, getOneContactById, addContact, deleteContact, updateContact, updateFavoriteField } = require('../../controllers/contacts');

router.get('/', authenticate, getAllContacts);

router.get('/:contactId', authenticate, isValidId, getOneContactById);

router.post('/', authenticate, addContact);

router.delete('/:contactId', authenticate, isValidId, deleteContact);

router.put('/:contactId', authenticate, isValidId, updateContact);

router.patch('/:contactId/favorite', authenticate, isValidId, updateFavoriteField);

module.exports = router;


