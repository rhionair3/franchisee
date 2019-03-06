module.exports = function(sequelize, DataTypes) {
	var menuRoles = sequelize.define('menuRoles', {
		rolesId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'roles_id'
        },
        menuIds: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'menu_ids'
		},
		status: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'status'
		}
	}, {
		tableName: 'menu_roles'
    });
    return menuRoles;
};
