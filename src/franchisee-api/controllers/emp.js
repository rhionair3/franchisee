const db= require('../configs/dB');

const secrets= require('../configs/secret');

const Pengguna= require('../models/users');
const Aturan= require('../models/employee_roles');

exports.list = (req, res) => {
    Pengguna.findAll({
        attributes: ['id', 'employeeRoleId', 'employeeCode', 'fullname', 'email'],
        where: {
            employeeRoleId: secrets.roleIds
        },
        include: [{
            model: Aturan,
            attributes: ['role_name']
        }]
    }).then(penggunas => {
        res.status(200).json({
            "deskripsi": "List Pengguna",
            "Pengguna": penggunas
        });
    }).catch(err => {
        res.status(500).json({
            "description": "Tidak Dapat Menampilkan List Pengguna",
            "error": err
        });
    })
}

exports.detail = (req, res) => {
    Pengguna.findOne({
        where: {
            id: req.body.id
        },
        include: [{
            model: Aturan,
            attributes: ['role_name']
        }]
    }).then(pengguna => {
        res.status(200).json({
            'deskripsi': 'Profil Pengguna',
            'pengguna': pengguna
        })
    }).catch(err => {
        res.status(500).json({
            "description": "Tidak Dapat Mengakses Halaman Profil",
            "error": err
        });
    })
}

exports.tambah = (req, res) => {
    console.log('Proses Tambah Pengguna Internal : ' + req.body.fullname);

    Pengguna.create({
        employee_code: req.body.email,
        fullname: req.body.fullname,
        password: brambangCRYPT.hashSync(req.body.password, 8),
        employee_role_id: req.body.employee_role_id,
        isActive: req.body.isActive,
        createdAt: req.body.createdAt,
        updatedAt: "",
        is_reset_password: req.body.is_reset_password
    }).then(pengguna => {
        res.send('Tambah Pengguna Sukses !');
    }).catch(err => {
        res.status(500).send("Gagal Menambah! Error Saat Menambah Data " + err);
    })
}

exports.ubah = (req, res) => {
    Pengguna.update({
        employee_code: req.body.email,
        fullname: req.body.fullname,
        password: brambangCRYPT.hashSync(req.body.password, 8),
        employeeRoleId: req.body.employeeRoleId,
        isActive: req.body.isActive,
        createdAt: req.body.createdAt,
        updatedAt: new Date(),
        isResetPassword: req.body.isResetPassword
    }, {
        where: {
            id: req.body.id
        }
    }).then(pengguna => {
        res.send("Edit Pengguna " + pengguna.fullname + " Sukses !");
    }).catch(err => {
        res.status(500).send("Gagal Edit! Error Saat Edit Data " + err);
    })
}

exports.hapus = (req, res) => {
    Pengguna.update({
        isActive: req.body.isActive,
        updatedAt: new Date()
    }, {
        where: {
            id: req.body.id
        }
    }).then(pengguna => {
        res.send("Hapus Pengguna " + pengguna.fullname + " Sukses !");
    }).catch(err => {
        res.status(500).send("Gagal Hapus! Error Saat Hapus Data " + err);
    })
}

exports.listAturan = (req,res) => {
    Aturan.findAll({
        where: {
            id: secrets.roleIds
        },
    }).then(Aturan => {
        res.status(200).json({
            "deskripsi": "List Aturan",
            "Aturan": Aturan
        });
    }).catch(err => {
        res.status(500).json({
            "description": "Tidak Dapat Menampilkan List Aturan",
            "error": err
        });
    })
}