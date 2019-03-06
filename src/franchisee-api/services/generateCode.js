const db = require('../configs/dB');
const Sequelize = require('sequelize');
const Franchise = db.frans;
const Koki = db.fransKokis;
const Gerobak = db.fransGerobaks;
const moment = require('moment');

const lengthDefine = 2;

var now = moment(new Date()).format("YYYY-MM-DD");
var splitDate = moment(new Date()).format("YYMMDD");

var self = module.exports = {
    formatNumLength : function(num, length) {
      var r = "" + num;
      while (r.length < length) {
          r = "0" + r;
      }
      return r;
    },

    generateFranchiseCode: async (req, res, next) => {
      var result = await Franchise.findAndCountAll({
        where: Sequelize.where(Sequelize.col('createdAt'), 'LIKE', now + "%"),
        raw: true
      });
      let data = result;
      if (data.count > 0) {
          var getDateCode = splitDate;
          var getCountNum = self.formatNumLength((data.count + 1), lengthDefine);

          var getCode = getDateCode + "" + getCountNum;

          return getCode;

      } else {
          var getDateCode = splitDate;
          var getCountNum = self.formatNumLength(1, lengthDefine);

          var getCode = getDateCode + "" + getCountNum;;

          return getCode;
      }
    },

    generateKokiCode : async (franchiseId, countInsert) => {
      var countKoki = await Koki.findAndCountAll({
        where : { franchise_id : franchise_id },
        raw : true
      });
      var findFranchise = await Franchise.findOne({
        where : { id : franchiseId },
        raw : true
      });
      let cKoki = countKoki;
      let fFranchise = findFranchise;
      if(cKoki.count > 0) {
          var getCountNum = self.formatNumLength((cKoki.count + countInsert), lengthDefine);

          var getCode = "K" + getCountNum;

          return fFranchise.asFranchiseCode + "" + getCode;

      } else {
          var getCountNum = self.formatNumLength(countInsert, lengthDefine);

          var getCode = "K" + getCountNum;

          return fFranchise.asFranchiseCode + "" + getCode;
      }

    },

    generateGerobakCode : async (franchiseId, countInsert) => {
      var countGerobak = await Gerobak.findAndCountAll({
        where : { franchiseId : franchiseId },
        raw : true
      });
      var findFranchise = await Franchise.findOne({
        where : { id : franchiseId },
        raw : true
      });
      let cGerobak = countGerobak;
      let fFranchise = findFranchise;

      if(cGerobak.count > 0) {
          var getCountNum = self.formatNumLength((cGerobak.count + countInsert), lengthDefine);

          var getCode = "G" + getCountNum;

          return fFranchise.asFranchiseCode + "" + getCode;

      } else {
          var getCountNum = self.formatNumLength(countInsert, lengthDefine);

          var getCode = "G" + getCountNum;

          return fFranchise.asFranchiseCode + "" + getCode;
      }

    },

    generateSertifikatCode : async (kokiId, franchiseId) => {
      Koki.belongsTo(Franchise, {foreignKey : 'franchise_id'});
      var details = await Koki.findOne({
        where: {
          id: kokiId
        }, 
        include: [
          {
            model: Franchise,
            where: {
              id: franchiseId
            }
          }
        ],
        raw: true
      });
      let detail = details;
      let getCode = splitDate + "/" + detail.codeKoki + "/" + detail.asFranchiseCode;

      return getCode;
    } 
}