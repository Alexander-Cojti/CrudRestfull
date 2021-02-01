'use strict';

const express = require('express');
const OController = require('../controllers/eventController');
const router = express.Router();

router.get('/Office', OController.getAllOffices);
router.get('/Office/:id', OController.getOfficeById);
router.post('/Office', OController.createOffice);
router.put('/Office/:id', OController.updateOffice);
router.delete('/Office/:id', OController.deleteOffice);
router.get('/Login/:user/:pass', OController.login);

module.exports = {
    routes: router
}