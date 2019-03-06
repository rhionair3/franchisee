module.exports = function(api) {
    const emp = require('../controllers/emp');
    const franchisee = require('../controllers/franchisee');
    const mgerobak = require('../controllers/mgerobak');
    const koki = require('../controllers/koki');
    const deliver = require('../controllers/shipping');

    api.post('/api/propinsi', deliver.propinsi);
    api.post('/api/kota', deliver.kota);
    api.post('/api/kecamatan', deliver.kecamatan);
    api.post('/api/kodepos', deliver.kodepos);

    api.post('/api/pengguna', emp.list);
    api.post('/api/pengguna/tambah', emp.tambah);
    api.post('/api/pengguna/ubah', emp.ubah);
    api.post('/api/pengguna/hapus', emp.hapus);
    api.post('/api/pengguna/roles', emp.listAturan);

    api.post('/api/gerobak', mgerobak.list);
    api.post('/api/gerobak/detail', mgerobak.detail);
    api.post('/api/gerobak/tambah', mgerobak.tambah);
    api.post('/api/gerobak/ubah', mgerobak.ubah);
    api.post('/api/gerobak/hapus', mgerobak.hapus);

    api.post('/api/koki', koki.detail);
    api.post('/api/koki/tambah', koki.tambah);
    api.post('/api/koki/ubah', koki.ubah);
    api.post('/api/koki/hapus', koki.hapus);

    api.post('/api/franchisee', franchisee.list);
    api.post('/api/franchisee/tambah', franchisee.tambah)
    api.post('/api/franchisee/ubah', franchisee.ubah);
    api.post('/api/franchisse/hapus', franchisee.hapus);
    api.post('/api/franchisee/detail', franchisee.detail);

    api.post('/api/franchisse/gerobak/detail', franchisee.detailGerobak);
    api.post('/api/franchisse/gerobak/tambah', franchisee.tambahGerobak);
    api.post('/api/franchisse/gerobak/ubah', franchisee.ubahGerobak);
    api.post('/api/franchisse/gerobak/hapus', franchisee.hapusGerobak);
    
    api.post('/api/franchisse/koki/detail', franchisee.detailKoki);
    api.post('/api/franchisse/koki/tambah', franchisee.tambahKoki);
    api.post('/api/franchisse/koki/ubah', franchisee.ubahKoki);
    api.post('/api/franchisse/koki/hapus', franchisee.hapusKoki);

    api.post('/api/franchisse/koki/detail', franchisee.detailKoki);
    api.post('/api/franchisse/koki/tambah', franchisee.tambahKoki);
    api.post('/api/franchisse/koki/ubah', franchisee.ubahKoki);
    api.post('/api/franchisse/koki/hapus', franchisee.hapusKoki);

}