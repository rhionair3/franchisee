const db= require('../configs/dB');

const Franchisee= db.frans;
const FDetails= db.fransShip;
const FKoki= db.fransKokis;
const FGerobak= db.fransGerobaks;
const FTransaction= db.fransGerobakTransactions;

const Propinsi= db.provinces;
const Kota= db.regencies;
const Kecamatan= db.districts;
const Kodepos= db.poscodes;

const genCode = require('../services/generateCode');

Franchisee.hasMany(FDetails, {foreignKey : 'franchise_id'});
Franchisee.hasMany(FKoki, {foreignKey : 'franchise_id'});
Franchisee.hasMany(FGerobak, {foreignKey : 'franchise_id'});
Franchisee.hasMany(FTransaction, {foreignKey : 'franchise_id'});

FDetails.belongsTo(Franchisee, {foreignKey : 'users_id'});
FDetails.belongsTo(Propinsi, {foreignKey : 'province_id'});
FDetails.belongsTo(Kota, {foreignKey : 'regency_id'});
FDetails.belongsTo(Kecamatan, {foreignKey : 'district_id'});
FDetails.belongsTo(Kodepos, {foreignKey : 'postal_id'});

FKoki.belongsTo(Franchisee, {foreignKey : 'franchise_id'});
FGerobak.belongsTo(Franchisee, {foreignKey : 'franchise_id'});
FTransaction.belongsTo(Franchisee, {foreignKey : 'franchise_id'});
FDetails.belongsTo(Franchisee, {foreignKey : 'franchise_id'});

exports.list = (req, res) => {
    Franchisee.findAll({
        include: [
            {model: FDetails},
            {model: FKoki},
            {model: FGerobak}
        ]
    }).then(franchisee => {
        res.status(200).json({
            "deskripsi": "List Pengguna",
            "franchisee": franchisee
        });
    }).catch(err => {
        console.log(err)
        res.status(500).json({
            "deskripsi": "Tidak Dapat Menampilkan List franchisee",
            "franchisee": "Gagal Load Data franchisee"
        });
    })
}

exports.detail = (req, res) => {
    Franchisee.findOne({
        where: {
            id: req.body.id
        },
        include: {
            model:FDetails,
            where: {
                franchiseId: req.body.id,
                isDefault: 1
            }
        }
    }).then(franchisee => {
        res.status(200).json({
            "deskripsi": "List Pengguna",
            "franchisee": franchisee
        });
    }).catch(err => {
        console.log(err)
        res.status(500).json({
            "deskripsi": "Tidak Dapat Menampilkan List franchisee",
            "franchisee": "Gagal Load Data franchisee"
        });
    })
}

exports.tambah = async (req, res) => {
    Franchisee.hasMany(FDetails, {foreignKey : 'franchise_id'});
    req.body = req.body.data;
    let fCode = genCode.generateFranchiseCode('id');
    let getCode = await fCode.then(code => {
        return code;
    });
    if(getCode && (getCode !== '' | getCode !== null)) {
        console.log(getCode);
        Franchisee.create({
            asFranchiseCode: getCode ,
            username: req.body.username,
            email: req.body.email,
            fullname: req.body.fullname,
            identityNo: req.body.identityNo,
            mobile: req.body.mobile,
            status: req.body.status,
            rolesId: req.body.rolesId,
            userType: req.body.userType,
            FDetails: [{
                provinceId: req.body.provinceId,
                regencyId: req.body.regencyId,
                districtId: req.body.districtId,
                postalId: req.body.postalId,
                name: req.body.name,
                address: req.body.address,
                contactNo: req.body.contactNo,
                isDefault: 1,
                isDeleted: 0,
                createdAt: new Date(),
                createdBy: '',
                updatedAt: new Date(),
                updatedBy: ''
            }]
        }, {
            include: [{
                model: FDetails
            }]
        }).then(franchisee => {
            res.status(200).json({
                "deskripsi": "Tambah Franchisee",
                "franchisee": franchisee
            });
        }).catch(err => {
            res.status(500).json({
                "deskripsi": "Tidak Dapat Menambahkan Franchisee",
                "franchisee": "Gagal Load Tambah franchisee"
            });
        })
    }

}

exports.ubah = (req, res) => {
    franchisee.update({
        asFranchiseCode: req.body.asFranchiseCode,
        username: req.body.username,
        email: req.body.email,
        fullname: req.body.fullname,
        identityNo: req.body.identityNo,
        mobile: req.body.mobile,
        status: req.body.status,
        rolesId: req.body.rolesId,
        userType: req.body.userType,
        FDetails: {
            provinceId: req.body.provinceId,
            regencyId: req.body.regencyId,
            districtId: req.body.districtId,
            postalId: req.body.postalId,
            name: req.body.name,
            address: req.body.address,
            contactNo: req.body.contactNo,
            isDefault: 1,
            isDeleted: 0,
            updatedAt: new Date(),
            updatedBy: ''
        }
    }, {
        where: {
            id: req.body.id
        },
        include: {
            model:FDetails,
            where: {
                franchiseId: req.body.id,
                id: req.body.detailId
            }
        }
    }).then(franchisee => {
        res.send("Edit franchisee " + franchisee.name + " Sukses !");
    }).catch(err => {
        res.status(500).send("Gagal Edit! Error Saat Edit Data " + err);
    })
}

exports.hapus = (req, res) => {
    franchisee.update({
        status: req.body.status
    }, {
        where: {
            id: req.body.id
        }
    }).then(franchisee => {
        res.send("Hapus franchisee " + franchisee.name + " Sukses !");
    }).catch(err => {
        res.status(500).send("Gagal Hapus! Error Saat Hapus Data " + err);
    })
}

exports.detailGerobak = (req, res) => {
    FGerobak.findOne({
        where: {
            id: req.body.fgerobakId
        }
    }).then(gerobak => {
        res.status(200).json({
            "deskripsi": "Details Gerobak",
            "gerobak": gerobak
        });
    }).catch(err => {
        res.status(500).send("Gagal Memuat Detail gerobak " + err);
    })
}

exports.createTransaction = (req, res) => {
    FTransaction.create({
        codeNo: req.body.codeNo,
        franchiseId: req.body.franchiseId,
        gerobakId: req.body.gerobakId,
        jumlahGerobak: req.body.jumlahGerobak,
        sendName: req.body.sendName,
        sendPhone: req.body.sendPhone,
        sendMobile: req.body.sendMobile,
        sendType: req.body.sendType,
        sendDate: req.body.sendDate,
        sendAddress: req.body.sendAddress,
        createdAt: new Date(),
        updatedAt: new Date(),
        updatedBy: ''
    }).then(transaction => {
        res.send("Tambah Transaksi Gerobak Sukses !");
    }).catch(err => {
        res.status(500).send("Gagal Menambahkan! Error Saat Menambah Data Transaksi " + err);
    })
}
exports.tambahGerobak = (req, res) => {
    let jml = req.body.jmlGerobak;
    let arrGerobak = [];
    let dataReady = false;
    for (let index = 0; index < jml; index++) {
        let gCode = genCode.generateGerobakCode(req.body.franchiseId);
        gCode.then(code => {
            let rowG = {
                codeGerobak: req.body.codeGerobak,
                trancsactionId: req.body.trancsactionId,
                franchiseId: req.body.franchiseId,
                gerobakId: req.body.gerobakId,
                status: req.body.status,
                createdAt: new Date(),
                createdBy: '',
                updatedAt: new Date(),
                updatedBy: ''
            }
            arrGerobak.push(rowG);
        }).catch(err => {
            return err;
        });
        if (index === jml) {
            dataReady = true;
        }
    }
    if (dataReady) {
        FGerobak.bulkCreate(arrGerobak).then(gerobak => {
            res.send("Tambah Gerobak Sukses !");
        }).catch(err => {
            res.status(500).send("Gagal Menambahkan! Error Saat Menambah Data Gerobak " + err);
        })
    } else {
        res.status(500).send("Gagal Menambahkan! Error Saat Iterasi Data Gerobak " + err);
    }
}

exports.ubahGerobak = (req, res) => {
    FGerobak.update({
        codeGerobak: req.body.codeGerobak,
        trancsactionId: req.body.trancsactionId,
        franchiseId: req.body.franchiseId,
        gerobakId: req.body.gerobakId,
        status: req.body.status,
        updatedAt: new Date(),
        updatedBy: ""
    }, {
        where: {
            id: req.body.fgerobakId
        }
    }).then(gerobak => {
        res.send("Edit Gerobak " + gerobak.codeNo + " Sukses !");
    }).catch(err => {
        res.status(500).send("Gagal Edit! Error Saat Edit Data Gerobak" + err);
    })
}

exports.hapusGerobak = (req, res) => {
    FGerobak.update({
        status: req.body.status
    }, {
        where: {
            id: req.body.fgerobakId
        }
    }).then(gerobak => {
        res.send("Hapus Gerobak Sukses !");
    }).catch(err => {
        res.status(500).send("Gagal Hapus! Error Saat Hapus Data " + err);
    })
}

exports.detailKoki = (req, res) => {
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

exports.tambahKoki = (req, res) => {
    let gKoki = genCode.generateKokiCode(req.body.franchiseId);
    gKoki.then(code => {
        FKoki.create({
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

exports.ubahKoki = (req, res) => {
    FKoki.update({
        codeKoki: reg.body.codeKoki,
        franchiseId: reg.body.franchiseId,
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

exports.hapusKoki = (req, res) => {
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