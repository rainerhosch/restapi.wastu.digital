[{
    id_pd: {
    type: 'INT(11)',
    allowNull: false,
    defaultValue: null,
    primaryKey: true,
    autoIncrement: false,
    comment: null
  },
  nm_pd: {
    type: 'VARCHAR(50)',
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  jk: {
    type: 'CHAR(4)',
    allowNull: true,
    defaultValue: 'L',
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  nisn: {
    type: 'CHAR(10)',
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  nik: {
    type: 'CHAR(16)',
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  tmpt_lahir: {
    type: 'VARCHAR(20)',
    allowNull: true,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  tgl_lahir: {
    type: 'DATE',
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  id_agama: {
    type: 'INT(16)',
    allowNull: true,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  id_kk: {
    type: 'INT(32)',
    allowNull: true,
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
  jln: {
    type: 'VARCHAR(80)',
    allowNull: true,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  rt: {
    type: 'TINYINT(2)',
    allowNull: true,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  rw: {
    type: 'TINYINT(2)',
    allowNull: true,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  nm_dsn: {
    type: 'VARCHAR(40)',
    allowNull: true,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  ds_kel: {
    type: 'VARCHAR(40)',
    allowNull: true,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  id_wil_feeder: {
    type: 'VARCHAR(20)',
    allowNull: true,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  id_kabupaten: {
    type: 'INT(11)',
    allowNull: true,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  id_provinsi: {
    type: 'INT(11)',
    allowNull: true,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  id_wil: {
    type: 'CHAR(8)',
    allowNull: true,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  kode_pos: {
    type: 'CHAR(5)',
    allowNull: true,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  id_jns_tinggal: {
    type: 'TINYINT(2)',
    allowNull: true,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  id_alat_transport: {
    type: 'TINYINT(2)',
    allowNull: true,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  telepon_rumah: {
    type: 'VARCHAR(20)',
    allowNull: true,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  telepon_seluler: {
    type: 'VARCHAR(20)',
    allowNull: true,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  email: {
    type: 'VARCHAR(50)',
    allowNull: true,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  id_kebutuhan_khusus_mahasiswa: {
    type: 'INT(11)',
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  a_terima_kps: {
    type: 'TINYINT(1)',
    allowNull: true,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  no_kps: {
    type: 'VARCHAR(40)',
    allowNull: true,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  stat_pd: {
    type: 'CHAR(1)',
    allowNull: true,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  nm_ayah: {
    type: 'VARCHAR(50)',
    allowNull: true,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  tgl_lahir_ayah: {
    type: 'DATE',
    allowNull: true,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  id_jenjang_pendidikan_ayah: {
    type: 'TINYINT(2)',
    allowNull: true,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  id_pekerjaan_ayah: {
    type: 'INT(32)',
    allowNull: true,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  id_penghasilan_ayah: {
    type: 'INT(32)',
    allowNull: true,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  id_kebutuhan_khusus_ayah: {
    type: 'INT(32)',
    allowNull: true,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  nm_ibu_kandung: {
    type: 'VARCHAR(50)',
    allowNull: true,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  tgl_lahir_ibu: {
    type: 'DATE',
    allowNull: true,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  id_jenjang_pendidikan_ibu: {
    type: 'TINYINT(2)',
    allowNull: true,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  id_penghasilan_ibu: {
    type: 'INT(32)',
    allowNull: true,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  id_pekerjaan_ibu: {
    type: 'INT(32)',
    allowNull: true,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  id_kebutuhan_khusus_ibu: {
    type: 'INT(32)',
    allowNull: true,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  nm_wali: {
    type: 'VARCHAR(30)',
    allowNull: true,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  tgl_lahir_wali: {
    type: 'DATE',
    allowNull: true,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  id_jenjang_pendidikan_wali: {
    type: 'TINYINT(2)',
    allowNull: true,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  id_pekerjaan_wali: {
    type: 'INT(32)',
    allowNull: true,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  id_penghasilan_wali: {
    type: 'INT(32)',
    allowNull: true,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  kewarganegaraan: {
    type: 'CHAR(2)',
    allowNull: true,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  npwp: {
    type: 'VARCHAR(25)',
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  kecamatan: {
    type: 'VARCHAR(50)',
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  kabupaten: {
    type: 'VARCHAR(50)',
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  golongandarah: {
    type: 'VARCHAR(2)',
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  nik_ayah: {
    type: 'VARCHAR(16)',
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  nik_ibu: {
    type: 'VARCHAR(16)',
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  tpt_lahir_ayah: {
    type: 'VARCHAR(25)',
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  tpt_lahir_ibu: {
    type: 'VARCHAR(25)',
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  pekerjaan_ayah: {
    type: 'VARCHAR(50)',
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  pekerjaan_ibu: {
    type: 'VARCHAR(50)',
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  alamat_ayah: {
    type: 'TEXT',
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  alamat_ibu: {
    type: 'TEXT',
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  rt_ayah: {
    type: 'VARCHAR(3)',
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  rw_ayah: {
    type: 'VARCHAR(3)',
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  kode_pos_ayah: {
    type: 'VARCHAR(7)',
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  rt_ibu: {
    type: 'VARCHAR(3)',
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  rw_ibu: {
    type: 'VARCHAR(3)',
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  kode_pos_ibu: {
    type: 'VARCHAR(7)',
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  size: {
    type: 'VARCHAR(3)',
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: 'field tambahan untuk ukuran almamater'
  },
  facebook: {
    type: 'VARCHAR(100)',
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  },
  instagram: {
    type: 'VARCHAR(100)',
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    autoIncrement: false,
    comment: null
  }
}]