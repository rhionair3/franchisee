var express = require('express');
var cors = require('cors');
var app = express();
var parsers = require('body-parser');
app.use(express.static('dist'));
app.use(cors());
app.use(parsers.json());

require('./routes/routes')(app);

const db = require('./configs/dB');

const Aturan = db.empRoles;

db.sequelize.query('SET FOREIGN_KEY_CHECKS = 0', { raw: true }).then ( function () {
    db.sequelize.sync({
        force: false
    }).then(() => {
        console.log('sinkronisasi data { force : true }');
        inisialisasi();
    });
});

var Port = 9090;

var srv = app.listen(Port, function () {
    var host = srv.address().address
    var port = srv.address().port

    console.log('App Listening at http://%s:%s', host, port);
})

function inisialisasi() {
    Aturan.bulkCreate([{
        id: 28,
        roleName: "Super Admin"
    },{
        id: 29,
        roleName: "Admin"
    },{
        id: 30,
        roleName: "Acount Manager"
    },{
        id: 31,
        roleName: "Staff Gudang"
    },{
        id: 32,
        roleName: "Staff Administrasi"
    }]);
}