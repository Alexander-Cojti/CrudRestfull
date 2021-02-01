'use strict';
const eventData = require('../data/events');

const getAllOffices = async (req, res, next) => {
    try {
        res.send(await eventData.getAllOffices());        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getOfficeById = async (req, res, next) => {
    try {
        res.send(await eventData.getOfficeById(req.params.id));
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const createOffice = async (req, res, next) => {
    try {
        res.send(await eventData.createOffice(req.body));
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateOffice = async (req, res, next) => {
    try {
        res.send(await eventData.updateOffice(req.params.id,req.body));
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteOffice = async (req, res, next) => {
    try {
        res.send(await eventData.deleteOffice( req.params.id));
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const login = async (req, res, next) => {
    try {
        res.send(await eventData.login( req.params.user,req.params.pass));
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllOffices,
    getOfficeById,
    createOffice,
    updateOffice,
    deleteOffice,
    login
}