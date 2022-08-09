const { Router}= require (`express`);
const {check}=require(`express-validator`)
const{validarCampos} =require(`../middlewares/validar-campos`)
const { antilogin } = require('../middlewares/antiisql');
const { login
 } = require("../controlador/auth");
const router = Router();
    


router.post('/',[antilogin],[
check(`usuario`,`El usuario es obligatorio`).not().isEmpty(),
check(`usuario`,`Valor hexadecimal`).not().isHexadecimal(),
check(`contraseña`,`La contraseña es obligatoria`).not().isEmpty(),
check(`contraseña`,`Valor no es alphanumerico`).isAlphanumeric(),
validarCampos
],login);
module.exports =router;