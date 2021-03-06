const DataType = require('sequelize');
const dbConfig = require('../../../config').dbconfig;

module.exports = (sequelize) => {
	sequelize.define('users', {
		product_id: {
			type: DataType.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		name: {
			type: DataType.STRING,
			allowNull: false,
		},
		title: {
			type: DataType.STRING,
			allowNull: false,
		},
		description: {
			type: DataType.STRING,	
			allowNull: false,		
		},
		product_catagories_id:{
			type: DataType.INTEGER,
			allowNull: false,
			references: {
				model: 'product_catagories',
				key: 'product_catagories_id',
			},
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

