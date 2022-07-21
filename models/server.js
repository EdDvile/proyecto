const express = require('express')
const cors = require('cors');
const { dbconnection } = require('../dbconect/config');

class Server{
constructor(){
this.app = express();
this.port =process.env.PORT;
this.conectarDB();
this.middlewares();
this.routes();

}
async conectarDB (){
await dbconnection()

}
middlewares(){
    this.app.use(express.json());
    this.app.use(cors())
this.app.use(express.static(`public`));


}
routes(){
this.app.use(`/api/login`,require(`../routes/auth`)),
this.app.use(`/api/usuario`,require(`../routes/usuarios`))
this.app.use(`/api/descargarusuario`,require(`../routes/descargar`))
this.app.use(`/api/consolidado`,require(`../routes/consolidado`))
}
listen(){
    this.app.listen(process.env.PORT,()=>{
        console.log(`servidor corriendo en puerto`,process.env.PORT)
        });

}
}

module.exports=Server;