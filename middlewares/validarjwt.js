const{response,request}=require('express');
const jwt = require('jsonwebtoken');

const validarjwt = async( req = request, res = response, next ) => {
//para modificar el header necesario para la validacion de JWT se debe modificar el valor de req.header
    const token = req.header(process.env.HEADERJWT);

    if ( !token ) {
        return res.status(401).json({
            msg: 'No hay token en la petición'
        });
    }

    try {
        
       jwt.verify( token, process.env.SECRETORPRIVATEKEY );

    
        next();

    } catch (error) {

        //console.log(error);
        res.status(401).json({
            msg: 'Token no válido'
        })
    }

}




module.exports={
    validarjwt
}