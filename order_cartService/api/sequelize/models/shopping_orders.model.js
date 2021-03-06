const DataType = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('shopping_orders', {
		shopping_orders_id: {
			type: DataType.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		user_id: {
			type: DataType.INTEGER,
			allowNull: false,
		}, 
		quantity: {
			type: DataType.INTEGER,
			allowNull: false,
		},
        shopping_status: {
			type: DataType.INTEGER,
			allowNull: false,
		},     
		created_at: {
			type: DataType.DATE,
		},
		updated_at: {
			type: DataType.DATE,
		},
		deleted_at: {
			type: DataType.DATE,
		},

	});
};