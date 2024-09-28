const { DataTypes } = require('sequelize');
const db = require('../config/databaseConfig');

const Mahasiswa = db.define('Mahasiswa', {
    id_pd: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    nm_pd: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    jk: {
        type: DataTypes.CHAR(4),
        allowNull: true,
        defaultValue: 'L',
    },
    nisn: {
        type: DataTypes.CHAR(10),
        allowNull: false,
    },
    nik: {
        type: DataTypes.CHAR(16),
        allowNull: false,
    },
    tmpt_lahir: {
        type: DataTypes.STRING(20),
        allowNull: true,
    },
    tgl_lahir: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    id_agama: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    id_kk: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    id_sp: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    jln: {
        type: DataTypes.STRING(80),
        allowNull: true,
    },
    rt: {
        type: DataTypes.TINYINT,
        allowNull: true,
    },
    rw: {
        type: DataTypes.TINYINT,
        allowNull: true,
    },
    nm_dsn: {
        type: DataTypes.STRING(40),
        allowNull: true,
    },
    ds_kel: {
        type: DataTypes.STRING(40),
        allowNull: true,
    },
    id_wil_feeder: {
        type: DataTypes.STRING(20),
        allowNull: true,
    },
    id_kabupaten: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    id_provinsi: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    id_wil: {
        type: DataTypes.CHAR(8),
        allowNull: true,
    },
    kode_pos: {
        type: DataTypes.CHAR(5),
        allowNull: true,
    },
    id_jns_tinggal: {
        type: DataTypes.TINYINT,
        allowNull: true,
    },
    id_alat_transport: {
        type: DataTypes.TINYINT,
        allowNull: true,
    },
    telepon_rumah: {
        type: DataTypes.STRING(20),
        allowNull: true,
    },
    telepon_seluler: {
        type: DataTypes.STRING(20),
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    id_kebutuhan_khusus_mahasiswa: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    a_terima_kps: {
        type: DataTypes.TINYINT,
        allowNull: true,
    },
    no_kps: {
        type: DataTypes.STRING(40),
        allowNull: true,
    },
    stat_pd: {
        type: DataTypes.CHAR(1),
        allowNull: true,
    },
    nm_ayah: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    tgl_lahir_ayah: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    id_jenjang_pendidikan_ayah: {
        type: DataTypes.TINYINT,
        allowNull: true,
    },
    id_pekerjaan_ayah: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    id_penghasilan_ayah: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    id_kebutuhan_khusus_ayah: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    nm_ibu_kandung: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    tgl_lahir_ibu: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    id_jenjang_pendidikan_ibu: {
        type: DataTypes.TINYINT,
        allowNull: true,
    },
    id_penghasilan_ibu: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    id_pekerjaan_ibu: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    id_kebutuhan_khusus_ibu: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    nm_wali: {
        type: DataTypes.STRING(30),
        allowNull: true,
    },
    tgl_lahir_wali: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    id_jenjang_pendidikan_wali: {
        type: DataTypes.TINYINT,
        allowNull: true,
    },
    id_pekerjaan_wali: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    id_penghasilan_wali: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    kewarganegaraan: {
        type: DataTypes.CHAR(2),
        allowNull: true,
    },
    npwp: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },
    kecamatan: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    kabupaten: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    golongandarah: {
        type: DataTypes.STRING(2),
        allowNull: false,
    },
    nik_ayah: {
        type: DataTypes.STRING(16),
        allowNull: false,
    },
    nik_ibu: {
        type: DataTypes.STRING(16),
        allowNull: false,
    },
    tpt_lahir_ayah: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },
    tpt_lahir_ibu: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },
    pekerjaan_ayah: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    pekerjaan_ibu: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    alamat_ayah: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    alamat_ibu: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    rt_ayah: {
        type: DataTypes.STRING(3),
        allowNull: false,
    },
    rw_ayah: {
        type: DataTypes.STRING(3),
        allowNull: false,
    },
    kode_pos_ayah: {
        type: DataTypes.STRING(7),
        allowNull: false,
    },
    rt_ibu: {
        type: DataTypes.STRING(3),
        allowNull: false,
    },
    rw_ibu: {
        type: DataTypes.STRING(3),
        allowNull: false,
    },
    kode_pos_ibu: {
        type: DataTypes.STRING(7),
        allowNull: false,
    },
    size: {
        type: DataTypes.STRING(3),
        allowNull: false,
        comment: 'field tambahan untuk ukuran almamater',
    },
    facebook: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    instagram: {
        type: DataTypes.STRING(100),
        allowNull: false,
    }
}, {
    tableName: 'mahasiswa',
    timestamps: false,
});

module.exports = Mahasiswa;
