const{response}=require (`express`);
const { dbconnection } = require('../dbconect/config');
const { anti } = require('../middlewares/antisql');

const usuariosgetall= (req, res =response)=> {
    var sql = require("mssql");
    sql.connect(dbconnection, function (err) {
        if (err)res.status(53).send({ error: 'No se pudo realizar la conexion a la base de datos' });
        var request = new sql.Request();
        request.query("select alum_nombre,alum_ape_paterno,alum_ape_materno,alum_email,alum_edad,alum_pais,alum_ciudad,alum_institucion,alum_fec_creacion from nitesthao_2022.dbo.tbl_alumno where alum_activo='true'", function (err, recordset) {  
            if (err)res.status(53).send({ error: 'No se pudo realizar la consulta' });
            var jsondata=JSON.stringify(recordset.recordset);
            res.send(jsondata);
            
        });
    });
    };


    
const usuariosgetnombre= (req, res =response)=> {
    var sql = require("mssql");
    const nombre=req.body.nombre
    nombrf=nombre
    sql.connect(dbconnection, function (err) {
        if (err)res.status(53).send({ error: 'No se pudo realizar la conexion a la base de datos' });
        var request = new sql.Request();
        request.query("select alum_nombre,alum_ape_paterno,alum_ape_materno,alum_email,alum_edad,alum_pais,alum_ciudad,alum_institucion,alum_fec_creacion from nitesthao_2022.dbo.tbl_alumno WHERE alum_nombre LIKE"+ "'%" +nombrf+ "%' and alum_activo='true' ", function (err, recordset) {  
            if (err)res.status(53).send({ error: 'No se pudo realizar la consulta' });
            var jsondata=JSON.stringify(recordset.recordset);
            res.send(jsondata);
        });
    });
    };
    
const usuariosgetemail= (req, res =response)=> {
    var sql = require("mssql");
    const email=req.body.email
    emailf=email
    sql.connect(dbconnection, function (err) {
        if (err)res.status(53).send({ error: 'No se pudo realizar la conexion a la base de datos' });
        var request = new sql.Request();
        request.query("select alum_nombre,alum_ape_paterno,alum_ape_materno,alum_email,alum_activo,alum_edad,alum_pais,alum_ciudad,alum_institucion,alum_fec_creacion from nitesthao_2022.dbo.tbl_alumno WHERE alum_email LIKE"+ "'%" +emailf+ "%' and alum_activo='true'", function (err, recordset) {  
            if (err)res.status(53).send({ error: 'No se pudo realizar la consulta' });
            var jsondata=JSON.stringify(recordset.recordset);
            res.send(jsondata);
            
        });
    });
    };
    
const usuariosgetciudad= (req, res =response)=> {
    const sql = require("mssql");
    const ciudad=req.body.ciudad
    ciudadf=ciudad
    sql.connect(dbconnection, function (err) {
        if (err)res.status(53).send({ error: 'No se pudo realizar la conexion a la base de datos' });
        const request = new sql.Request();
        request.query("select alum_nombre,alum_ape_paterno,alum_ape_materno,alum_email,alum_activo,alum_edad,alum_pais,alum_ciudad,alum_institucion,alum_fec_creacion from nitesthao_2022.dbo.tbl_alumno WHERE alum_ciudad LIKE"+ "'%" +ciudadf+ "%' and alum_activo='true'", function (err, recordset) {  
            if (err)res.status(53).send({ error: 'No se pudo realizar la consulta' });
            var jsondata=JSON.stringify(recordset.recordset);
            res.send(jsondata);
     
        });
    });
    };

 const usuariosgetpais= (req, res =response)=> {
        var sql = require("mssql");
        const pais=req.body.pais
        paisf=pais
        sql.connect(dbconnection, function (err) {
            if (err)res.status(53).send({ error: 'No se pudo realizar la conexion a la base de datos' });
            var request = new sql.Request();
            request.query("select alum_nombre,alum_ape_paterno,alum_ape_materno,alum_email,alum_activo,alum_edad,alum_pais,alum_ciudad,alum_institucion,alum_fec_creacion from nitesthao_2022.dbo.tbl_alumno WHERE alum_pais like"+ "'%" +paisf+ "%' and alum_activo='true'", function (err, recordset) {  
                if (err)res.status(53).send({ error: 'No se pudo realizar la consulta' });
                var jsondata=JSON.stringify(recordset.recordset);
                res.send(jsondata);
                
            });
        });
        };
 const dardebaja= (req, res =response)=> {
            var sql = require("mssql");
            const ides=req.body.id
            idf=ides
            sql.connect(dbconnection, function (err) {
                if (err)res.status(53).send({ error: 'No se pudo realizar la conexion a la base de datos' });
                var request = new sql.Request();
                request.query("select alum_nombre from nitesthao_2022.dbo.tbl_alumno WHERE alum_id="+idf, function (err, recordset) {  
                    if (err)res.status(53).send({ error: 'No se pudo realizar la consulta' });
                  if (recordset.recordset.length== 0){
                    res.json({msg :"Usuario no encontrado"})
                  }else{
                var request = new sql.Request();
                request.query("UPDATE nitesthao_2022.dbo.tbl_alumno SET alum_activo = 'false'  WHERE alum_id=" +idf, function (err, recordset) {  
                    if (err) res.status(53).send({ error: 'No se pudo dar de baja al usuario' });
                    res.json({msg :"Usuario dado de baja"})
                    
                })}
            });
        });
        };
 const insertaralumno= (req, res =response)=> {
                var sql = require("mssql");
                const{nombres, apellidopterno, apellidomaterno, email, edad, pais, ciudad, institucion, fechainscripcion}=req.body
                nombresf=nombres
                apellidopternof=apellidopterno
                apellidomaternof=apellidomaterno
                emailf=email
                edadf=edad
                paisf=pais
                ciudadf=ciudad
                institucionf=institucion
                fechainscripcionf=fechainscripcion
                sql.connect(dbconnection, function (err) {
                    if (err)res.status(53).send({ error: 'No se pudo realizar la conexion a la base de datos' });
                    var request = new sql.Request();
                    request.query("INSERT INTO nitesthao_2022.dbo.tbl_alumno ( alum_nombre,alum_ape_paterno,alum_ape_materno,alum_email,alum_edad,alum_pais,alum_ciudad, alum_institucion ,alum_fec_creacion) VALUES ('" +nombresf+ "', '"+apellidopternof+"', '"+apellidomaternof+"','"+emailf+"', '"+edadf+"', '"+paisf+"', '"+ciudadf+"', '"+institucionf+"', '"+fechainscripcionf+"' )", async function (err, recordset) {  
                        if (err){
                            res.status(53).send({ error: 'No se pudo realizar la consulta' });
                        }
                        else{
                            res.json({msg :"Usuario agregado"})
                        }
                    });
                });
                };       
                const modificaralumno = (req,res = response)=>{
                    const{id, columna, modificacion}=req.body
                    idef=id
                    columnaf=columna
                    modificacionf=modificacion
                    var sql = require("mssql");
                      sql.connect(dbconnection, function (err) {
                          if (err)res.status(53).send({ error: 'No se pudo realizar la conexion a la base de datos' });
                          var request = new sql.Request();
                          request.query("select alum_nombre from nitesthao_2022.dbo.tbl_alumno WHERE alum_id="+idef, function (err, recordset) {  
                              if (err) res.status(53).send({ error: 'No se pudo realizar la consulta' });
                            if (recordset.recordset.length== 0){
                                res.json({msg :"Usuario no encontrado"});
                            }else{
                                var request = new sql.Request();
                                request.query("UPDATE nitesthao_2022.dbo.tbl_alumno SET "+columnaf+"= '"+modificacionf+"'  WHERE alum_id=" +idef, function (err, recordset) {  
                                    if (err){
                                         res.status(53).send({ error: 'No se pudo realizar la modificacion' });
                                    }
                                     else{   res.json({msg :"Usuario modificado"})
                                     }
                          
                            })}
                          });
                      });
                      };
               
    module.exports={
usuariosgetall,
usuariosgetnombre,
usuariosgetemail,
usuariosgetciudad,
usuariosgetpais,
dardebaja,
insertaralumno,
modificaralumno

    }