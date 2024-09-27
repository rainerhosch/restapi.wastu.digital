'use strict';

// const { Router } = require('express');
const express = require('express');
const mahasiswaRouter = express.Router();
const mahasiswaController = require('../controllers/mahasiswa.controller');


mahasiswaRouter.route('/')
    .get(mahasiswaController.findAll) // Mengambil semua mahasiswa
    .post(mahasiswaController.create); // Menambah mahasiswa
mahasiswaRouter.route('/:id')
    .get(mahasiswaController.findOne) // Mengambil mahasiswa berdasarkan ID
    .put(mahasiswaController.update) // Memperbarui mahasiswa berdasarkan ID
    .delete(mahasiswaController.delete); // Menghapus mahasiswa berdasarkan ID

module.exports = mahasiswaRouter;