const {DataTypes} = require('sequelize');
const sequelize = require('../utils/connection');

const Director = sequelize.define ('Director',{

    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    lastName: {
        type: DataTypes.STRING,
        allowNull:false
    },

    nationality: {
        type:DataTypes.STRING,
        allowNull: false
    },

    image: {
        type:DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Director;