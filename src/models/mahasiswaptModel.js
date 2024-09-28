const { DataTypes } = require('sequelize');
const db = require('../config/databaseConfig');

const Mahasiswapt = db.define('Mahasiswapt', {
    id_reg_pd: {
        type: 'INT(11)',
        allowNull: false,
        defaultValue: null,
        primaryKey: true,
        autoIncrement: false,
        comment: null
    },
    id_sms: {
        type: 'INT(11)',
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null
    },
    id_feeder: {
        type: 'VARCHAR(255)',
        allowNull: false,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null
    },
    id_pd: {
        type: 'INT(11)',
        allowNull: false,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null
    },
    id_sp: {
        type: 'INT(11)',
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null
    },
    id_jns_daftar: {
        type: 'TINYINT(1)',
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null
    },
    nipd: {
        type: 'VARCHAR(18)',
        allowNull: false,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null
    },
    tgl_masuk_sp: {
        type: 'DATE',
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null
    },
    id_jns_keluar: {
        type: 'CHAR(1)',
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null
    },
    tgl_keluar: {
        type: 'DATE',
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null
    },
    ket: {
        type: 'VARCHAR(128)',
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null
    },
    skhun: {
        type: 'VARCHAR(20)',
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null
    },
    a_pernah_paud: {
        type: 'TINYINT(1)',
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null
    },
    a_pernah_tk: {
        type: 'TINYINT(1)',
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null
    },
    mulai_smt: {
        type: 'VARCHAR(5)',
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null
    },
    sks_diakui: {
        type: 'TINYINT(3)',
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null
    },
    judul_kp: {
        type: 'VARCHAR(256)',
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: 'field tambahan untuk singkron ke sistem perpus'
    },
    jalur_skripsi: {
        type: 'TINYINT(1)',
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null
    },
    judul_skripsi: {
        type: 'VARCHAR(500)',
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null
    },
    bln_awal_bimbingan: {
        type: 'DATE',
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null
    },
    bln_akhir_bimbingan: {
        type: 'DATE',
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null
    },
    sk_yudisium: {
        type: 'VARCHAR(30)',
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null
    },
    tgl_sk_yudisium: {
        type: 'DATE',
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null
    },
    ipk: {
        type: 'DOUBLE',
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null
    },
    no_seri_ijazah: {
        type: 'VARCHAR(40)',
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null
    },
    pin: {
        type: 'VARCHAR(50)',
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: 'field tambahan'
    },
    sert_prof: {
        type: 'VARCHAR(40)',
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null
    },
    a_pindah_mhs_asing: {
        type: 'TINYINT(1)',
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null
    },
    nm_pt_asal: {
        type: 'VARCHAR(50)',
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null
    },
    nm_prodi_asal: {
        type: 'VARCHAR(50)',
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null
    },
    password: {
        type: 'VARCHAR(32)',
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null
    },
    id_level: {
        type: 'TINYINT(2)',
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null
    },
    id_ptk: {
        type: 'INT(11)',
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: 'field tambahan Nyambungkan ke tabel dosen untuk identifikasi dosen wali'
    },
    id_kuriklum_mhs: {
        type: 'INT(11)',
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: 'kolom tambahan'
    },
    no_transkip_nilai: {
        type: 'VARCHAR(50)',
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: 'kolom tambahan no transkip'
    },
    id_kelas: {
        type: 'VARCHAR(5)',
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: 'kolom tambahan untuk home base kelas, join ke wastu_kelas'
    },
    status: {
        type: 'TINYINT(1)',
        allowNull: true,
        defaultValue: '0',
        primaryKey: false,
        autoIncrement: false,
        comment: '1 Aktif, 2 Mengundurkan Diri, 3 DO, 4 Lulus'
    },
    pesan: {
        type: 'VARCHAR(100)',
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: 'kolom tambahan'
    },
    kesan: {
        type: 'VARCHAR(100)',
        allowNull: true,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: 'kolom tambahan'
    },
    email_studen: {
        type: 'VARCHAR(50)',
        allowNull: false,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null
    }
}, {
    tableName: 'mahasiswa_pt',
    timestamps: false,
});

module.exports = Mahasiswapt;
