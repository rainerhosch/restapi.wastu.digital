const Mahasiswa = require('../models/mahasiswaModel');
const Mahasiswapt = require('../models/mahasiswaptModel');

// Mendapatkan semua data mahasiswa
exports.getAllMahasiswa = async (req, res) => {
    const _limit = parseInt(req.query.limit) || 10;
    const _offset = parseInt(req.query.offset) || 0;
    try {
        const mahasiswa = await Mahasiswa.findAll({
            offset: _offset,
            limit: _limit
        });
        res.status(200).json(mahasiswa);
    } catch (error) {
        res.status(500).json({ message: 'Terjadi kesalahan saat mengambil data mahasiswa', error });
    }
};

// Mendapatkan data mahasiswa berdasarkan ID
exports.getMahasiswaById = async (req, res) => {
    const id = req.params.id;
    try {
        const mahasiswa = await Mahasiswa.findByPk(id);
        if (mahasiswa) {
            res.status(200).json(mahasiswa);
        } else {
            res.status(404).json({ message: 'Mahasiswa tidak ditemukan' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Terjadi kesalahan saat mengambil data mahasiswa', error });
    }
};

// Menambahkan data mahasiswa baru
exports.createMahasiswa = async (req, res) => {
    try {
        const mahasiswa = await Mahasiswa.create(req.body);
        res.status(201).json(mahasiswa);
    } catch (error) {
        res.status(500).json({ message: 'Terjadi kesalahan saat menambahkan data mahasiswa', error });
    }
};

// Mengupdate data mahasiswa
exports.updateMahasiswa = async (req, res) => {
    const id = req.params.id;
    try {
        const [updated] = await Mahasiswa.update(req.body, {
            where: { id_pd: id }
        });
        if (updated) {
            const updatedMahasiswa = await Mahasiswa.findByPk(id);
            res.status(200).json(updatedMahasiswa);
        } else {
            res.status(404).json({ message: 'Mahasiswa tidak ditemukan' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Terjadi kesalahan saat mengupdate data mahasiswa', error });
    }
};

// Menghapus data mahasiswa
exports.deleteMahasiswa = async (req, res) => {
    const id = req.params.id;
    try {
        const deleted = await Mahasiswa.destroy({
            where: { id_pd: id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Mahasiswa tidak ditemukan' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Terjadi kesalahan saat menghapus data mahasiswa', error });
    }
};
