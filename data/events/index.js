'use strict';
const config = require('../../config');
const sql = require('mssql');


const getAllOffices = async () => {
    try {
        const pool = await sql.connect(config.sql);
        const res = await pool.request().execute('SP_R_OFFICE');
        return res.recordset;
    } catch (error) {
       return  error.message;
    }
}

const getOfficeById = async(Id) => {
    try {
        const pool = await sql.connect(config.sql);
        const res = await pool.request().input('Id', sql.Int, Id).execute('SP_R_OFFICE');
        return res.recordset[0];
    } catch (error) {
        return error.message;
    }
}

const createOffice = async (data) => {
    try {
        const pool = await sql.connect(config.sql);
        const res = await pool
          .request()
          .input("NAMEOFFICE", sql.NVarChar(250), data.NAMEOFFICE)
          .input("LOCATION", sql.NVarChar(250), data.LOCATION)
          .input("PHONE", sql.Int, data.PHONE)
          .input("LONGITUD", sql.NVarChar(50), data.LONGITUD)
          .input("LATITUD", sql.NVarChar(50), data.LATITUD)
          .execute('SP_C_OFFICE');
        return res.recordset[0];
    } catch (error) {
        return error.message;
    }
}

const updateOffice = async (id,data) => {
    try {
        const pool = await sql.connect(config.sql);
        const res = await pool.request()
        .input("ID", sql.Int, id)
        .input("NAMEOFFICE", sql.NVarChar(250), data.NAMEOFFICE)
        .input("LOCATION", sql.NVarChar(250), data.LOCATION)
        .input("PHONE", sql.Int, data.PHONE)
        .input("LONGITUD", sql.NVarChar(50), data.LONGITUD)
        .input("LATITUD", sql.NVarChar(50), data.LATITUD)
        .execute('SP_U_OFFICE');
        return res.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteOffice = async (id) => {
    try {
        const pool = await sql.connect(config.sql);
        const res = await pool.request().input('ID', sql.Int, id).execute('SP_D_OFFICE');
        return res.recordset[0];
    } catch (error) {
        return error.message;
    }
}
const login = async (user, pass) => {
    try {
        const pool = await sql.connect(config.sql);
        const res = await pool.request()
        .input('USER', sql.VarChar(50), user)
        .input('PASS', sql.VarChar(250), pass)
        .execute('SP_LOGIN');
        return res.recordset[0];
    } catch (error) {
        return error.message;
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
// const utils = require('../utils');
// const sqlQueries = await utils.loadSqlQueries('events');