const db= require('../configs/dB');

const Gerobak= db.mGerobak;

exports.list = (req, res) => {
    Gerobak.findAll().then(gerobak => {
        res.status(200).json({
            "deskripsi": "List Gerobak",
            "gerobak": gerobak
        });
    }).catch(err => {
        console.log(err)
        res.status(500).json({
            "deskripsi": "Tidak Dapat Menampilkan List Gerobak"
        });
    })
}

exports.detail = (req, res) => {
    Gerobak.findOne({
        where: {
            id: req.body.id
        }
    }).then(gerobak => {
        res.status(200).json({
            "deskripsi": "Detail Gerobak",
            "gerobak": gerobak
        });
    }).catch(err => {
        console.log(err)
        res.status(500).json({
            "deskripsi": "Tidak Dapat Menampilkan List Gerobak"
        });
    })
}

exports.tambah = (req, res) => {
    Gerobak.create({
        code: req.body.code,
        name: req.body.name,
        status: req.body.status,
        isDeleted: req.body.isDeleted,
        createdAt: new Date(),
        updatedAt: new Date(),
        updatedBy: ''
    }).then(gerobak => {
        res.status(200).json({
            "deskripsi": "Tambah Gerobak",
            "gerobak": gerobak
        });
    }).catch(err => {
        res.status(500).json({
            "deskripsi": "Tidak Dapat Menambahkan List Gerobak"
        });
    })
}

exports.ubah = (req, res) => {
    Gerobak.update({
        code: req.body.code,
        name: req.body.name,
        status: req.body.status,
        isDeleted: req.body.isDeleted,
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt,
        updatedBy: req.body.updatedBy
    }, {
        where: {
            id: req.body.id
        }
    }).then(gerobak => {
        res.status(200).json({
            "deskripsi": "Update Gerobak",
            "gerobak": gerobak
        });
    }).catch(err => {
        res.status(500).json({
            "deskripsi": "Tidak Dapat Memperbaharui List Gerobak"
        });
    })
}

exports.hapus = (req, res) => {
    Gerobak.update({
        isDeleted: 1
    }, {
        where: {
            id: req.body.id
        }
    }).then(gerobak => {
        res.status(200).json({
            "deskripsi": "Hapus Gerobak",
            "gerobak": gerobak
        });
    }).catch(err => {
        console.log(err)
        res.status(500).json({
            "deskripsi": "Tidak Dapat Menghapus List Gerobak"
        });
    })
}