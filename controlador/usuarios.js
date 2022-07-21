const{response}=require (`express`);
const { dbconnection } = require('../dbconect/config');
const { anti } = require('../middlewares/antisql');

const usuariosgetall= (req, res =response)=> {
    var sql = require("mssql");
    sql.connect(dbconnection, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query("select alum_nombre,alum_ape_paterno,alum_ape_materno,alum_email,alum_edad,alum_pais,alum_ciudad,alum_institucion,alum_fec_creacion from nitesthao_2022.dbo.tbl_alumno where alum_activo='true'", function (err, recordset) {  
            if (err) res.status(502).json(err)
            res.send(recordset.recordset);
            
        });
    });
    };


    
const usuariosgetnombre= (req, res =response)=> {
    var sql = require("mssql");
    const nombre=req.body.nombre
    nombrf=anti(nombre)
    sql.connect(dbconnection, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query("select alum_nombre,alum_ape_paterno,alum_ape_materno,alum_email,alum_edad,alum_pais,alum_ciudad,alum_institucion,alum_fec_creacion from nitesthao_2022.dbo.tbl_alumno WHERE alum_nombre LIKE"+ "'%" +nombrf+ "%' and alum_activo='true' ", function (err, recordset) {  
            if (err) res.status(502).json(err)
            res.send(recordset.recordset);
            
        });
    });
    };
    
const usuariosgetemail= (req, res =response)=> {
    var sql = require("mssql");
    const email=req.body.email
    emailf=anti(email)
    sql.connect(dbconnection, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query("select alum_nombre,alum_ape_paterno,alum_ape_materno,alum_email,alum_activo,alum_edad,alum_pais,alum_ciudad,alum_institucion,alum_fec_creacion from nitesthao_2022.dbo.tbl_alumno WHERE alum_email LIKE"+ "'%" +emailf+ "%' and alum_activo='true'", function (err, recordset) {  
            if (err) res.status(502).json(err)
            res.send(recordset.recordset);
            
        });
    });
    };
    
const usuariosgetciudad= (req, res =response)=> {
    const sql = require("mssql");
    const ciudad=req.body.ciudad
    ciudadf=anti(ciudad)
    sql.connect(dbconnection, function (err) {
        if (err) console.log(err);
        const request = new sql.Request();
        request.query("select alum_nombre,alum_ape_paterno,alum_ape_materno,alum_email,alum_activo,alum_edad,alum_pais,alum_ciudad,alum_institucion,alum_fec_creacion from nitesthao_2022.dbo.tbl_alumno WHERE alum_ciudad LIKE"+ "'%" +ciudadf+ "%' and alum_activo='true'", function (err, recordset) {  
            if (err) res.status(502).json(err)
            res.send(recordset.recordset);
     
        });
    });
    };

 const usuariosgetpais= (req, res =response)=> {
        var sql = require("mssql");
        const pais=req.body.pais
        paisf=anti(pais)
        sql.connect(dbconnection, function (err) {
            if (err) console.log(err);
            var request = new sql.Request();
            request.query("select alum_nombre,alum_ape_paterno,alum_ape_materno,alum_email,alum_activo,alum_edad,alum_pais,alum_ciudad,alum_institucion,alum_fec_creacion from nitesthao_2022.dbo.tbl_alumno WHERE alum_pais like"+ "'%" +paisf+ "%' and alum_activo='true'", function (err, recordset) {  
                if (err) res.status(502).json(err)
                res.send(recordset.recordset);
                
            });
        });
        };
 const dardebaja= (req, res =response)=> {
            var sql = require("mssql");
            const ides=req.body.id
            idf=anti(ides)
            sql.connect(dbconnection, function (err) {
                if (err) console.log(err)
                var request = new sql.Request();
                request.query("select alum_nombre from nitesthao_2022.dbo.tbl_alumno WHERE alum_id="+idf, function (err, recordset) {  
                    if (err) res.status(502).json(err)
                  if (recordset.recordset.length== 0){
                      res.send("usuario no encontrado");
                  }else{
                var request = new sql.Request();
                request.query("UPDATE nitesthao_2022.dbo.tbl_alumno SET alum_activo = 'false'  WHERE alum_id=" +idf, function (err, recordset) {  
                    if (err) res.status(502).json(err)
                    res.send("usuario dado de baja");
                    
                })}
            });
        });
        };
 const insertaralumno= (req, res =response)=> {
                var sql = require("mssql");
                const{nombres, apellidopterno, apellidomaterno, email, edad, pais, ciudad, institucion, fechainscripcion}=req.body
                nombresf=anti(nombres)
                apellidopternof=anti(apellidopterno)
                apellidomaternof=anti(apellidomaterno)
                emailf=anti(email)
                edadf=anti(edad)
                paisf=anti(pais)
                ciudadf=anti(ciudad)
                institucionf=anti(institucion)
                fechainscripcionf=fechainscripcion
                sql.connect(dbconnection, function (err) {
                    if (err) console.log(err);
                    var request = new sql.Request();
                    request.query("INSERT INTO nitesthao_2022.dbo.tbl_alumno ( alum_nombre,alum_ape_paterno,alum_ape_materno,alum_email,alum_edad,alum_pais,alum_ciudad, alum_institucion ,alum_fec_creacion) VALUES ('" +nombresf+ "', '"+apellidopternof+"', '"+apellidomaternof+"','"+emailf+"', '"+edadf+"', '"+paisf+"', '"+ciudadf+"', '"+institucionf+"', '"+fechainscripcionf+"' )", async function (err, recordset) {  
                        if (err){
                            res.status(502).json(err)
                        }
                        else{
                            res.send("alumno agregado");
                        }
                    });
                });
                };       
                const modificaralumno = (req,res = response)=>{
                    const{id, columna, modificacion}=req.body
                    idef=anti(id) 
                    columnaf=anti(columna)
                    modificacionf=anti(modificacion)
                    var sql = require("mssql");
                      sql.connect(dbconnection, function (err) {
                          if (err) console.log(err);
                          var request = new sql.Request();
                          request.query("select alum_nombre from nitesthao_2022.dbo.tbl_alumno WHERE alum_id="+idef, function (err, recordset) {  
                              if (err) res.status(502).json(err)
                            if (recordset.recordset.length== 0){
                                res.send("usuario no encontrado");
                            }else{
                                var request = new sql.Request();
                                request.query("UPDATE nitesthao_2022.dbo.tbl_alumno SET "+columnaf+"= '"+modificacionf+"'  WHERE alum_id=" +idef, function (err, recordset) {  
                                    if (err){
                                         res.status(502).json(err)
                                    }
                                     else{    res.send("usuario modificado");
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