const { response } = require('express')

const usuariosGet = (req, res = response) => {
  const { comida="N/A", bebida="N/A" } = req.query
    res.status(201).json({
        ok: true,
        msg: "soy un get - controlador",
        comida,
        bebida
    });
  };
  
const usuariosPut = (req, res) => {
    const { id } = req.params; 

    res.status(201).json({
        ok: true,
        msg: "soy un put - Controller",
        id
    });
  };

const usuariosPost = (req, res) => {
    const { nombre, edad } = req.body;
    res.status(201).json({
        ok: true,
        msg: "soy un post - Controller",
        nombre, 
        edad
    });
  };

const usuariosDelete = (req, res) => {
    res.status(201).json({
        ok: true,
        msg: "soy un delete - Controller"
    });
  };
module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}