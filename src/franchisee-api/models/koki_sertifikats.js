/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	var kokiSertifikat =  sequelize.define('kokiSertifikats', {
		code: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'code'
		},
		kokiId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'kokis',
				key: 'id'
			},
			field: 'koki_id'
		},
		expiredAt: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'expiredAt'
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'createdAt'
		},
		status: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'status'
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
		tableName: 'koki_sertifikats'
	});

	return kokiSertifikat;
};
