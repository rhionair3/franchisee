/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	var gerobaks = sequelize.define('gerobaks', {
		codeGerobak: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'code_gerobak'
		},
		trancsactionId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'transaction_id'
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
		status: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'status'
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
		tableName: 'gerobaks'
	});

	return gerobaks;
};
