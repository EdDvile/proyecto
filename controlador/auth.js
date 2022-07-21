const{response} =require(`express`)
const { dbconnection } = require('../dbconect/config');
const { generarJWT } = require('../helpers/generar-jwt');
const { anti } = require('../middlewares/antisql');
const login = (req,res = response)=>{
  const{usuario,contraseña}=req.body
  userf=anti(usuario)
  contraf=anti(contraseña)
  var sql = require("mssql");
    sql.connect(dbconnection, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query('select usu_username,usu_password from nitesthao_2022.dbo.tbl_usuario where usu_username='+ "'" +userf+ "'and usu_password="+ "'" +contraf+ "' and usu_rol='admin' and usu_activo=1 ", function (err, recordset) {  
            if (err) res.status(502).json(err)
          if (recordset.recordset.length== 0){
            res.json({msg :"Usuario no encontrado o no es administrador"})
          }else{
            var request=new sql.Request();
            request.query('select usu_id from nitesthao_2022.dbo.tbl_usuario where usu_username='+ "'" +userf+ "'and usu_password="+ "'" +contraf+ "'", async function (err, recordset) {  
          const token = await generarJWT( recordset.recorset );
          res.send(token)

        
          })}
        });
    });
    };

module.exports={
    login
  
}