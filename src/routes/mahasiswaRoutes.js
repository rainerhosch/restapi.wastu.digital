const express = require('express');
const mahasiswaController = require('../controllers/mahasiswaController');

const router = express.Router();

// Route untuk mendapatkan semua data mahasiswa
router.get('/list', mahasiswaController.getAllMahasiswa);

// Route untuk mendapatkan data mahasiswa berdasarkan ID
router.get('/detail/:id', mahasiswaController.getMahasiswaById);

// Route untuk menambahkan data mahasiswa baru
router.post('/', mahasiswaController.createMahasiswa);

// Route untuk mengupdate data mahasiswa
router.put('/:id', mahasiswaController.updateMahasiswa);

// Route untuk menghapus data mahasiswa
router.delete('/:id', mahasiswaController.deleteMahasiswa);

module.exports = router;
