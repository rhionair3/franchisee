/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	var kokis = sequelize.define('kokis', {
		codeKoki: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'code_koki'
		},
		franchiseId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'franchise_id'
		},
		identityId: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'identity_id'
		},
		fullname: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'fullname'
		},
		certified: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'certified'
		},
		status: {
			type: DataTypes.INTEGER,
			allowNull: true,
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
		tableName: 'kokis'
	});
	return kokis;
};
