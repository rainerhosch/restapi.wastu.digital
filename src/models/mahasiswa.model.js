'use strict';
const sql = require("../utils/db"); // Pastikan untuk menyesuaikan dengan lokasi file db.js Anda

// Constructor Mahasiswa
const Mahasiswa = function(mahasiswa) {
    this.id_pd = mahasiswa.id_pd;
    this.nama = mahasiswa.nama;
    this.alamat = mahasiswa.alamat;
    this.email = mahasiswa.email;
};

// Create a new Mahasiswa
Mahasiswa.create = (newMahasiswa, result) => {
    sql.query("INSERT INTO mahasiswa SET ?", newMahasiswa, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, { id: res.insertId, ...newMahasiswa });
    });
};

// Retrieve all Mahasiswa
Mahasiswa.getAll = (result) => {
    sql.query("SELECT * FROM mahasiswa", (err, res) => {
        if (err) {
            result(null, err);
            return;
        }
        result(null, res);
    });
};

// Find a Mahasiswa by ID
Mahasiswa.findById = (id, result) => {
    sql.query(`SELECT * FROM mahasiswa WHERE id_pd = ?`, id, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        if (res.length) {
            result(null, res[0]);
            return;
        }
        // Not found Mahasiswa with the id
        result({ kind: "not_found" }, null);
    });
};

// Update a Mahasiswa by ID
Mahasiswa.updateById = (id, mahasiswa, result) => {
    sql.query(
        "UPDATE mahasiswa SET nama = ?, alamat = ?, email = ? WHERE id_pd = ?",
        [mahasiswa.nama, mahasiswa.alamat, mahasiswa.email, id],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            if (res.affectedRows == 0) {
                // Not found Mahasiswa with the id
                result({ kind: "not_found" }, null);
                return;
            }
            result(null, { id_pd: id, ...mahasiswa });
        }
    );
};

// Delete a Mahasiswa by ID
Mahasiswa.remove = (id, result) => {
    sql.query("DELETE FROM mahasiswa WHERE id_pd = ?", id, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        if (res.affectedRows == 0) {
            // Not found Mahasiswa with the id
            result({ kind: "not_found" }, null);
            return;
        }
        result(null, res);
    });
};

module.exports = Mahasiswa;


