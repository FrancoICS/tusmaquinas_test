const pool = require('../pg_pool/pool');
const {json} = require('express')


exports.listar = async(req, res) => {
    try{

        const { rows } = await pool.query(` SELECT
                                                mascota.id AS mascota_id,
                                                mascota.nombre,
                                                raza.nombre AS raza, 
                                                familia.nombre AS familia, 
                                                persona.nombre AS responsable,
                                                persona.correo_electronico AS correo
                                            FROM persona
                                            JOIN mascota ON mascota.id = persona.mascota_id
                                            JOIN raza ON raza.id = mascota.raza_id
                                            JOIN familia ON familia.id = mascota.familia_id
                                            ORDER BY mascota.id DESC `);
        if (rows) res.status(200).json(rows)

    }catch(err){
        console.log(err)
        res.status(500).json({ message: 'error 500' });
    }  

}


    exports.listar_mascotas = async(req, res) => {
        try{
    
            const { rows } = await pool.query(` SELECT id, nombre FROM mascota`);
            if (rows) res.status(200).json(rows)
    
        }catch(err){
            console.log(err)
            res.status(500).json({ message: 'error 500' });
        }  

};