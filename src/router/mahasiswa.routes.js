'use strict';

const { Router } = require('express');
const mahasiswaController = require('../controllers/mahasiswa.controller');

const mahasiswaRouter = Router();

// Define routes with best practices
mahasiswaRouter.route('/')
    .get(mahasiswaController.findAll) // Mengambil semua mahasiswa
    .post(mahasiswaController.create); // Menambah mahasiswa

mahasiswaRouter.route('/:id')
    .get(mahasiswaController.findOne) // Mengambil mahasiswa berdasarkan ID
    .put(mahasiswaController.update) // Memperbarui mahasiswa berdasarkan ID
    .delete(mahasiswaController.delete); // Menghapus mahasiswa berdasarkan ID

module.exports = mahasiswaRouter;