const db= require('../configs/dB');

const Menu= db.menus;
const Aturan= db.empRoles;

exports.list = (req, res) => {
    Menu.findAll().then(menus => {
        res.status(200).json({
            "deskripsi": "List Menu",
            "menu": menus
        });
    }).catch(err => {
        console.log(err)
        res.status(500).json({
            "deskripsi": "Tidak Dapat Menampilkan List Menu",
            "menu": "Gagal Load Data Menu"
        });
    })
}

exports.detail = (req, res) => {
    Menu.findAll({
        where: {
            id: req.body.id
        }
    }).then(menus => {
        res.status(200).json({
            "deskripsi": "Detail Menu",
            "menu": menus
        });
    }).catch(err => {
        console.log(err)
        res.status(500).json({
            "deskripsi": "Tidak Dapat Menampilkan Detail Menu",
            "menu": "Gagal Load Data Menu"
        });
    })
}

exports.tambah = (req, res) => {
    Menu.create({
        icon: req.body.icon,
        name: req.body.name,
        link: req.body.link,
        order: req.body.order,
        level: req.body.level,
        rolesId: req.body.rolesId,
        status: req.body.status
    }).then(menu => {
        res.send("Tambah Menu " + menu.name + " Sukses !");
    }).catch(err => {
        res.status(500).send("Gagal Menambahkan! Error Saat Menambah Data Menu " + err);
    })
}

exports.ubah = (req, res) => {
    Menu.update({
        icon: req.body.icon,
        name: req.body.name,
        link: req.body.link,
        order: req.body.order,
        level: req.body.level,
        rolesId: req.body.rolesId,
        status: req.body.status
    }, {
        where: {
            id: req.body.id
        }
    }).then(menu => {
        res.send("Edit Menu " + menu.name + " Sukses !");
    }).catch(err => {
        res.status(500).send("Gagal Edit! Error Saat Edit Data " + err);
    })
}

exports.hapus = (req, res) => {
    Menu.update({
        status: req.body.status
    }, {
        where: {
            id: req.body.id
        }
    }).then(menu => {
        res.send("Hapus Menu " + menu.name + " Sukses !");
    }).catch(err => {
        res.status(500).send("Gagal Hapus! Error Saat Hapus Data " + err);
    })
}