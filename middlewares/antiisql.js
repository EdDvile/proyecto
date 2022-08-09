const { response, request } = require('express');
const { anti } = require('../middlewares/antisql');
const antilogin = async( req = request, res = response, next ) => {
    req.body.usuario = anti(req.body.usuario);
    req.body.contraseña = anti(req.body.contraseña);
        next();

}
const antinombre = async( req = request, res = response, next ) => {
  req.body.nombre = anti(req.body.nombre);
  
      next();

}

const antiemail = async( req = request, res = response, next ) => {
  req.body.email = anti(req.body.email);

      next();

}

const anticiudad = async( req = request, res = response, next ) => {
  req.body.ciudad = anti(req.body.ciudad);
      next();

}

const antipais = async( req = request, res = response, next ) => {
  req.body.pais = anti(req.body.pais);
      next();

}

const antidardebaja = async( req = request, res = response, next ) => {
  req.body.id = anti(req.body.id);
      next();

}

const antiinsertar = async( req = request, res = response, next ) => {
  req.body.nombres = anti(req.body.nombres);
  req.body.apellidopterno = anti(req.body.apellidopterno);
  req.body.apellidomaterno = anti(req.body.apellidomaterno);
  req.body.email = anti(req.body.email);
  req.body.edad = anti(req.body.edad);
  req.body.pais = anti(req.body.pais);
  req.body.ciudad = anti(req.body.ciudad);
  req.body.institucion = anti(req.body.institucion);
      next();

}

const antimodificar = async( req = request, res = response, next ) => {
  req.body.id = anti(req.body.id);
  req.body.columna = anti(req.body.columna);
  req.body.modificacion = anti(req.body.modificacion);
      next();

}




module.exports = {
  antilogin,
  antinombre,
  antiemail,
  anticiudad,
  antipais,
  antidardebaja,
  antiinsertar,
  antimodificar
}