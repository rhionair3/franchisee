/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('villages', {
		districtId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'districts',
				key: 'id'
			},
			field: 'district_id'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'name'
		}
	}, {
		tableName: 'villages'
	});
};
