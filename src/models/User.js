const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 
   // En Mayúsculas y singular      // en minúsculas y singular
const User= sequelize.define('user', {
    // Definimos las columnas aquí
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING(100),
        allowNull :false 
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    password: { 
        type: DataTypes.STRING,
        allowNull:false
    },
    birthday:{
        type:DataTypes.DATEONLY,
        allowNull:true 
    }
});

module.exports = User;