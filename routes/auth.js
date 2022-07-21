const { Router}= require (`express`);
const {check}=require(`express-validator`)
const{validarCampos} =require(`../middlewares/validar-campos`)
const { login
 } = require("../controlador/auth");
const router = Router();




router.post('/',[
check(`usuario`,`El usuario es obligatorio`).not().isEmpty(),
check(`usuario`,`Valor hexadecimal`).not().isHexadecimal(),
check(`contraseña`,`La contraseña es obligatoria`).not().isEmpty(),
check(`contraseña`,`Valor hexadecimal`).not().isHexadecimal(),
validarCampos
],login);
module.exports =router;