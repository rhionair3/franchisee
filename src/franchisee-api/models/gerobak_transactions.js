/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    var gerobakTransactions = sequelize.define('gerobak_transactions', {
        codeNo: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'code_no'
        },
        franchiseId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'franchise_id'
        },
        gerobakId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'gerobak_id'
        },
        jumlahGerobak: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'jml_gerobak'
        },
        sendName: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'send_name'
        },
        sendPhone: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'send_phone'
        },
        sendMobile: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'send_mobile'
        },
        sendType: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'send_type'
        },
        sendDate: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'send_date'
        },
        sendAddress: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'send_address'
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'createdAt'
        },
        createdBy: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'createdBy'
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'updatedAt'
        },
        updatedBy: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'updatedBy'
        }
    }, {
        tableName: 'gerobak_transactions'
    });

    return gerobakTransactions;
};
