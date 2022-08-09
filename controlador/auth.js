const{response} =require(`express`)
const { dbconnection } = require('../dbconect/config');
const { generarJWT } = require('../helpers/generar-jwt');
const login = (req,res = response)=>{
  const{usuario,contraseña}=req.body
  userf=usuario
  contraf=contraseña
  var sql = require("mssql");
    sql.connect(dbconnection, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query('select usu_id,usu_username,usu_password,usu_rol  from nitesthao_2022.dbo.tbl_usuario where usu_username='+ "'" +userf+ "'and usu_password="+ "'" +contraf+ "' and usu_activo=1", async function (err, recordset) {  
            if (err)res.status(53).send({ error: 'No se pudo realizar la consulta' });
         
          if (recordset.recordset.length== 0){
            res.json({msg :"Usuario no encontrado"})
          }else if(recordset.recordset[0].usu_rol!= "admin"){
            res.status(200).send({ error: 'usuario no es administrador' });
          }else{
            idjson=JSON.stringify( { 'usu_id':recordset.recordset[0].usu_id} )
          const token = await generarJWT( idjson );
        
         tokenjson=JSON.stringify( { 'token': token ,'usuario':userf} )
         res.send(tokenjson)

        
          }})})}

module.exports={
    login
  
}