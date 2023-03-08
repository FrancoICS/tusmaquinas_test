const pool = require('../pg_pool/pool');
const {json} = require('express')



exports.crear = async (req, res) => {
    try{  
        const response = (req.body)
        const nombre = response.nombre
        const correo = response.correo
        const telefono = response.telefono
        const mascota = response.mascota

        const insert = await pool.query(`INSERT INTO persona (nombre, correo_electronico, telefono, mascota_id) 
                                           VALUES ('${nombre}','${correo}','${telefono}', ${mascota})`
                                         );
        console.log(insert)                                 
        res.status(200).json(req.body);
    }catch(err){
        console.log(err)
        res.status(500).json({ message: 'error 500' });
    }  
};

exports.actualizar = async (req, res) => {
    try{  
    }catch(err){
        console.log(err)
        res.status(500).json({ message: 'error 500' });
    }      
};

exports.eliminar = async (req, res) => {
    try{  
    }catch(err){
        console.log(err)
        res.status(500).json({ message: 'error 500' });
    }      

};