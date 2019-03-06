const db = require('../configs/dB');

const Propinsi= db.provinces;
const Kota= db.regencies;
const Kecamatan= db.districts;
const Kodepos= db.poscodes;

exports.propinsi = (req, res) => {
    Propinsi.findAll({
        where: {
            orders: [1, 2, 3, 4]
        }
    }).then(provincy => {
        res.status(200).json({
            'deskripsi': 'List Provincy',
            'provincy': provincy
        })
    }).catch(err => {
        console.log(err)
        res.status(500).json({
            "deskripsi": "Tidak Dapat Menampilkan List Provincy",
            "provincy": "Gagal Load Data Provincy"
        });
    })
}

exports.kota = (req, res) => {
    Kota.findAll({
        where: {
            provinceId: req.body.provinceId
        }
    }).then(Kota => {
        res.status(200).json({
            'deskripsi': 'List Kota',
            'Kota': Kota
        })
    }).catch(err => {
        res.status(500).json({
            "deskripsi": "Tidak Dapat Menampilkan List Kota",
            "Kota": "Gagal Load Data Kota"
        });
    })
}

exports.kecamatan = (req,res) => {
    Kecamatan.findAll({
        where: {
            regencyId: req.body.regencyId
        }
    }).then(Kecamatan => {
        res.status(200).json({
            'deskripsi': 'List Kecamatan',
            'Kecamatan': Kecamatan
        })
    }).catch(err => {
        res.status(500).json({
            "deskripsi": "Tidak Dapat Menampilkan List Kecamatan",
            "Kecamatan": "Gagal Load Data Kecamatan"
        });
    })
}

exports.kodepos = (req, res) => {
    Kodepos.findAll({
        where: {
            districtId: req.body.districtId
        }
    }).then(Kodepos => {
        res.status(200).json({
            'deskripsi': 'List Kodepos',
            'Kodepos': Kodepos
        })
    }).catch(err => {
        res.status(500).json({
            "deskripsi": "Tidak Dapat Menampilkan List Kodepos",
            "Kodepos": "Gagal Load Data Kodepos"
        });
    })
}