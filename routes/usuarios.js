const { Router } = require('express')

const router = Router();

const { usuariosGet,
        usuariosPut,
        usuariosPost,
        usuariosDelete } = require('../controllers/usuariosController');

  router.get('/', usuariosGet)
  
  router.put('/:id?', usuariosPut)

  router.post('/', usuariosPost)

  router.delete('/', usuariosDelete)




module.exports = router;