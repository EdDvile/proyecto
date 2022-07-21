const { Router}= require (`express`);
const {validarjwt} = require('../middlewares/validarjwt');
const { } = require("../controlador/descargar");
const { Ultimosinscritos7, consolidado1, consolidado2 } = require('../controlador/consolidado');
const router = Router();




router.get('/consolidado2',[validarjwt],consolidado2);
router.get('/ultimosinsc7',[validarjwt],Ultimosinscritos7);
router.get('/consolidado1',[validarjwt],consolidado1);




module.exports =router;