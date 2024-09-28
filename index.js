const express = require('express');
const cors = require("cors");
require('dotenv').config();
const sequelize = require('./src/config/databaseConfig'); // Mengimpor konfigurasi database
const mahasiswaRoutes = require('./src/routes/mahasiswaRoutes');
const swaggerDocs = require('./src/config/swagger.config');


const app = express();
const _PORT = process.env.PORT;
const _HOST = process.env.HOST;

/** 
 * Middleware
 * */
app.use(cors());
app.use(express.json()); // Menambahkan middleware untuk parsing JSON
swaggerDocs(app, _PORT)
 // Start of Selection
app.get('/', (req, res) => {
    res.redirect('/api-docs'); //redirect ke halaman dokumentasi 
});

app.use('/api/v1/mahasiswa', mahasiswaRoutes); // Menggunakan router mahasiswa

// Cek koneksi database
sequelize.authenticate()
    .then(() => {
        console.log('Koneksi ke database berhasil.');

        // // Menampilkan list tabel
        // sequelize.sync().then(() => {
        //     return sequelize.getQueryInterface().showAllTables();
        // }).then((tables) => {
        //     console.log('List tabel:', tables);
        // }).catch(err => {
        //     console.error('Error saat menampilkan tabel:', err);
        // });

        // // Menampilkan list attribut table
        // sequelize.getQueryInterface().describeTable('mahasiswa_pt').then(attributes => {
        //     console.log('List atribut dari tabel:', attributes);
        // }).catch(err => {
        //     console.error('Error saat mendapatkan atribut tabel:', err);
        // });

        

    })
    .catch(err => {
        console.error('Tidak dapat terhubung ke database:', err);
    });

app.listen(_PORT, () => {
    console.log(`Server started on http://${_HOST}:${_PORT}`);
});