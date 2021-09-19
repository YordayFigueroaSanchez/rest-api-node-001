const mongoose = require('mongoose');

const conexionDB = async () => {
    try {
        const DB = await mongoose.connect('mongodb://localhost:27017/rest_api_node_001');
        console.log("Conexion de forma satisfactoria", DB.connection.name);
    } catch (error) {
        console.log(error);
    }
}

module.exports = conexionDB