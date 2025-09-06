import { DataTypes } from "sequelize";
import sequelize from "@/lib/sequelize.js";

const School = sequelize.define("School", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    city: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    state: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    contact: {
        type: DataTypes.STRING(10),  
        allowNull: false,
        validate: {
            len: [10, 10],            
            isNumeric: true,          
        },
    },
    email_id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,                
        validate: {
            isEmail: true,            
        },
    },
    image:{
        type:DataTypes.STRING,
        allowNull:false
    }
})


export default School;