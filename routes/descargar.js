const { Router}= require (`express`);
const {validarjwt} = require('../middlewares/validarjwt');
const { usuariosdescargar } = require("../controlador/descargar");
const router = Router();




router.get('/',[validarjwt],usuariosdescargar);
module.exports =router;