const db = require('../configs/dB');

const koki = db.fransKokis;
const sertifikat = db.fransKokiSerificates;
const training = db.fransKokiTrainings;

const genCode = require('../services/generateCode');

exports.list = (req, res) => {
    FKoki.findAll({
        where: {
            id: req.body.kokiId
        }
    }).then(kokis => {
        res.status(200).json({
            "deskripsi": "List Koki",
            "koki": kokis
        });
    }).catch(err => {
        res.status(500).send("Gagal Memuat List Koki " + err);
    })
}

exports.detail = (req, res) => {
    FKoki.findOne({
        where: {
            id: req.body.kokiId
        }
    }).then(koki => {
        res.status(200).json({
            "deskripsi": "Details Koki",
            "koki": koki
        });
    }).catch(err => {
        res.status(500).send("Gagal Memuat Detail Koki " + err);
    })
}

exports.tambah = (req, res) => {
    let gKoki = genCode.generateKokiCode(req.body.franchiseId);
    gKoki.then(code => {
        koki.create({
            codeKoki: code,
            franchiseId: reg.body.franchiseId,
            identityId: reg.body.identityId,
            fullname: reg.body.fullname,
            certified: reg.body.certified,
            lastTraining: reg.body.lastTraining,
            status: reg.body.status,
            createdAt: new Date(),
            createdBy: '',
            updatedAt: new Date(),
            updatedBy: ''
        }).then(koki => {
            res.send("Tambah Koki Sukses !");
        }).catch(err => {
            res.status(500).send("Gagal Menambahkan! Error Saat Menambah Data Koki " + err);
        })
    }).catch({

    });
}

exports.ubah = (req, res) => {
    koki.update({
        codeKoki: reg.body.codeKoki,
        identityId: reg.body.identityId,
        fullname: reg.body.fullname,
        certified: reg.body.certified,
        lastTraining: reg.body.lastTraining,
        status: reg.body.status,
        updatedAt: new Date(),
        updatedBy: ''
    }, {
        where: {
            id: req.body.kokiId
        }
    }).then(koki => {
        res.send("Edit Koki Sukses !");
    }).catch(err => {
        res.status(500).send("Gagal Edit! Error Saat Edit Data Koki" + err);
    })
}

exports.hapus = (req, res) => {
    Gerobak.update({
        status: req.body.status
    }, {
        where: {
            id: req.body.kokiId
        }
    }).then(gerobak => {
        res.send("Hapus Gerobak " + gerobak.codeNo + " Sukses !");
    }).catch(err => {
        res.status(500).send("Gagal Hapus! Error Saat Hapus Data " + err);
    })
}

exports.listSertifikat = (req, res) => {
    FKoki.findAll({
        where: {
            id: req.body.kokiId
        }
    }).then(cert => {
        res.status(200).json({
            "deskripsi": "List Sertifikat",
            "sertifikat": cert
        });
    }).catch(err => {
        res.status(500).send("Gagal Memuat List Sertifikat " + err);
    })
}

exports.detailSertifikat = (req, res) => {
    sertifikat.findOne({
        where: {
            id: req.body.id
        }
    }).then(cert => {
        res.status(200).json({
            "deskripsi": "Details Sertifikat",
            "sertifikat": cert
        });
    }).catch(err => {
        res.status(500).send("Gagal Memuat Detail Sertifikat " + err);
    })
}

exports.tambahSertifikat = (req, res) => {
    let fKoki = genCode.generateSertifikatCode(req.body.kokiId, reg.body.franchiseId);
    fKoki.then(code => {
        sertifikat.create({
            code: code,
            kokiId: req.body.kokiId,
            expiredAt: req.body.expiredAt,
            createdAt: new Date(),
            createdBy: '',
            updatedAt: new Date(),
            updatedBy: ''
        }).then(koki => {
            res.send("Generate Sertifikat Sukses !");
        }).catch(err => {
            res.status(500).send("Gagal generate! Error Saat Generate Sertifikat " + err);
        })
    }).catch({

    });
}

exports.ubahSertifikat = (req, res) => {
    sertifikat.update({
        status: req.body.status,
        updatedAt: new Date(),
        updatedBy: ''
    }, {
        where: {
            id: req.body.id
        }
    }).then(cert => {
        res.send("Edit Sertifikat Sukses !");
    }).catch(err => {
        res.status(500).send("Gagal Edit! Error Saat Edit Data Sertifikat" + err);
    })
}