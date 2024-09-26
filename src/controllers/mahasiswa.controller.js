const Mahasiswa = require("../models/mahasiswa.model");
exports.create = (req, res) => {
    // Validasi permintaan
    if (!req.body) {
        return res.status(400).send({
            message: "Konten tidak boleh kosong!"
        });
    }
    // Buat Mahasiswa baru
    const mahasiswa = new Mahasiswa({
        id_pd: req.body.id_pd,
        nama: req.body.nama,
        alamat: req.body.alamat,
        email: req.body.email
    });
    // Simpan Mahasiswa ke dalam database
    Mahasiswa.create(mahasiswa, (err, data) => {
        if (err) {
            return res.status(500).send({
                message: err.message || "Terjadi kesalahan saat membuat Mahasiswa."
            });
        }
        res.send(data);
    });
};

// Ambil semua Mahasiswa dari database
exports.findAll = (req, res) => {
    Mahasiswa.getAll((err, data) => {
        if (err) {
            return res.status(500).send({
                message: err.message || "Terjadi kesalahan saat mengambil data Mahasiswa."
            });
        }
        res.send(data);
    });
};

// Cari Mahasiswa berdasarkan ID
exports.findOne = (req, res) => {
    Mahasiswa.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                return res.status(404).send({
                    message: `Mahasiswa dengan id ${req.params.id} tidak ditemukan.`
                });
            } else {
                return res.status(500).send({
                    message: "Kesalahan saat mengambil Mahasiswa dengan id " + req.params.id
                });
            }
        }
        res.send(data);
    });
};

// Update Mahasiswa
exports.update = (req, res) => {
    // Validasi permintaan
    if (!req.body) {
        return res.status(400).send({
            message: "Konten tidak boleh kosong!"
        });
    }

    Mahasiswa.updateById(req.params.id, new Mahasiswa(req.body), (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                return res.status(404).send({
                    message: `Mahasiswa dengan id ${req.params.id} tidak ditemukan.`
                });
            } else {
                return res.status(500).send({
                    message: "Kesalahan saat memperbarui Mahasiswa dengan id " + req.params.id
                });
            }
        }
        res.send(data);
    });
};

// Hapus Mahasiswa
exports.delete = (req, res) => {
    Mahasiswa.remove(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                return res.status(404).send({
                    message: `Mahasiswa dengan id ${req.params.id} tidak ditemukan.`
                });
            } else {
                return res.status(500).send({
                    message: "Tidak dapat menghapus Mahasiswa dengan id " + req.params.id
                });
            }
        }
        res.send({ message: `Mahasiswa berhasil dihapus!` });
    });
};

// Hapus semua Mahasiswa
exports.deleteAll = (req, res) => {
    Mahasiswa.removeAll((err, data) => {
        if (err) {
            return res.status(500).send({
                message: err.message || "Terjadi kesalahan saat menghapus semua Mahasiswa."
            });
        }
        res.send({ message: `Semua Mahasiswa berhasil dihapus!` });
    });
};