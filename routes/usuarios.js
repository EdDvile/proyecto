const { Router}= require (`express`)
const {validarjwt} = require('../middlewares/validarjwt');
const {check}=require(`express-validator`)
const{validarCampos} =require(`../middlewares/validar-campos`)
const{usuariosgetall,
    usuariosgetnombre,
    usuariosgetemail,
    usuariosgetciudad,
    usuariosgetpais,
    dardebaja,
    insertaralumno,
    modificaralumno,
} =require(`../controlador/usuarios`);
const router = Router();




router.get('/all',[validarjwt], usuariosgetall);
router.get('/nombre',[validarjwt],[
    check(`nombre`,`El nombre es obligatorio`).not().isEmpty(),
    check(`nombre`,`Valor hexadecimal`).not().isHexadecimal(),
    validarCampos
    ], usuariosgetnombre);
router.get('/email',[validarjwt],[
    check(`email`,`El Email es obligatorio`).not().isEmpty(),
    check(`email`,`Valor hexadecimal`).not().isHexadecimal(),
    validarCampos
    ], usuariosgetemail);
router.get('/ciudad',[validarjwt],[
    check(`ciudad`,`La ciudad es obligatoria`).not().isEmpty(),
    check(`ciudad`,`Valor hexadecimal`).not().isHexadecimal(),
    validarCampos
    ], usuariosgetciudad);
router.get('/pais',[validarjwt],[
    check(`pais`,`El pais es obligatorio`).not().isEmpty(),
    check(`pais`,`Valor hexadecimal`).not().isHexadecimal(),
    validarCampos
    ], usuariosgetpais);
router.delete('/dardebaja',[validarjwt],[
    check(`id`,`El id es obligatorio`).not().isEmpty(),
    check(`id`,`El id es Numerico`).isNumeric(),
    
    validarCampos
    ], dardebaja);
router.post('/insertar',[validarjwt],[
    check(`nombres`,`El nombre es obligatorio`).not().isEmpty(),
    check(`nombres`,`Valor hexadecimal`).not().isHexadecimal(),
    check(`apellidopterno`,`El apellido paterno es obligatorio`).not().isEmpty(),
    check(`apellidopterno`,`Valor hexadecimal`).not().isHexadecimal(),
    check(`apellidomaterno`,`El apellido materno es obligatorio`).not().isEmpty(),
    check(`apellidomaterno`,`Valor hexadecimal`).not().isHexadecimal(),
    check(`email`,`El email es obligatorio`).not().isEmpty(),
    check(`email`,`Valor hexadecimal`).not().isHexadecimal(),
    check(`edad`,`La edad es obligatoria`).not().isEmpty(),
    check(`edad`,`Valor hexadecimal`).isNumeric(),
    check(`pais`,`El pais es obligatorio`).not().isEmpty(),
    check(`pais`,`Valor hexadecimal`).not().isHexadecimal(),
    check(`ciudad`,`La ciudad es obligatoria`).not().isEmpty(),
    check(`ciudad`,`Valor hexadecimal`).not().isHexadecimal(),
    check(`institucion`,`La institucion es obligatoria`).not().isEmpty(),
    check(`institucion`,`Valor hexadecimal`).not().isHexadecimal(),
    check(`fechainscripcion`,`La fecha de inscripcion es obligatoria`).not().isEmpty(),
    check(`fechainscripcion`,`Valor hexadecimal`).not().isHexadecimal(),
    check(`fechainscripcion`,`La fecha de inscripcion es en formato fecha`).isDate({format: 'YYYY-MM-DD'}),
    validarCampos
    ], insertaralumno);
router.put('/modificar',[validarjwt],[
    check(`id`,`El id es obligatorio`).not().isEmpty(),
    check(`id`,`El id es Numerico`).isNumeric(),
    check(`columna`,`La columna es obligatoria`).not().isEmpty(),
    check(`columna`,`Valor hexadecimal`).not().isHexadecimal(),
    check(`modificacion`,`La modificacion es obligatorio`).not().isEmpty(),
    check(`modificacion`,`Valor hexadecimal`).not().isHexadecimal(),
    validarCampos
    ], modificaralumno);





module.exports = router;