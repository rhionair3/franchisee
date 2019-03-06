const conf = require('./config'); 
console.log(conf);
const Sequelize = require('sequelize');

const sequelize = new Sequelize(conf.database, conf.username, conf.password, {
    host: conf.host,
    dialect: conf.dialect,
    operatorsAliases: false,
    pool: {
        max: conf.max,
        min: conf.min,
        acquire: conf.acquire,
        idle: conf.idle
    }
});

const dB = {};

dB.Sequelize= Sequelize;
dB.sequelize= sequelize;

dB.emp= require('../models/employees')(sequelize, Sequelize);
dB.empRoles= require('../models/employee_roles')(sequelize, Sequelize);
dB.menus= require('../models/menus')(sequelize, Sequelize);

dB.provinces= require('../models/provinces')(sequelize, Sequelize);
dB.regencies= require('../models/regencies')(sequelize, Sequelize);
dB.districts= require('../models/districts')(sequelize, Sequelize);
dB.poscodes= require('../models/postals')(sequelize, Sequelize);

dB.mGerobak= require('../models/gerobak_masters')(sequelize, Sequelize);

dB.frans= require('../models/users')(sequelize, Sequelize);
dB.fransShip= require('../models/users_shipping_address')(sequelize, Sequelize);
dB.fransRoles= require('../models/roles')(sequelize, Sequelize);

dB.fransGerobaks= require('../models/gerobaks')(sequelize, Sequelize);
dB.fransGerobakTransactions = require('../models/gerobak_transactions')(sequelize, Sequelize);

dB.fransKokis= require('../models/kokis')(sequelize, Sequelize);
dB.fransKokiTrainings= require('../models/koki_trainings')(sequelize, Sequelize);
dB.fransKokiSerificates= require('../models/koki_sertifikats')(sequelize, Sequelize);

module.exports = dB;
