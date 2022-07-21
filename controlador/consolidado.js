const{response}=require (`express`);
const { dbconnection } = require('../dbconect/config');

const consolidado2= (req, res =response)=> {
    var sql = require("mssql");
    sql.connect(dbconnection, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query("SELECT  (SELECT COUNT(*) FROM nitesthao_2022.dbo.tbl_test WHERE test_tipo_test = 6) AS Test_Invitado,(SELECT COUNT(*) FROM nitesthao_2022.dbo.tbl_test WHERE test_tipo_test = 1) AS Test_Saludos,(SELECT COUNT(*) FROM nitesthao_2022.dbo.tbl_test WHERE test_tipo_test = 2) AS Test_Frases,(SELECT COUNT(*) FROM nitesthao_2022.dbo.tbl_test WHERE test_tipo_test = 3) AS Test_Ubicacion_Espacio,(SELECT COUNT(*) FROM nitesthao_2022.dbo.tbl_test WHERE test_tipo_test = 4) AS Test_Expresiones,(SELECT COUNT(*) FROM nitesthao_2022.dbo.tbl_test WHERE test_tipo_test = 5) AS Test_Servicios", function (err, recordset) {  
            if (err) res.status(502).json(err)
            var jsondata=JSON.stringify(recordset.recordset[0]);
            res.send(jsondata);
            
        });
    });
    };
                                                                 
                          const Ultimosinscritos7= (req, res =response)=> {
                            var sql = require("mssql");
                            sql.connect(dbconnection, function (err) {
                                if (err) console.log(err);
                                var request = new sql.Request();
                                request.query("SELECT  alum_nombre as NOMBRES, alum_ape_paterno as 'APELLIDO PATERNO', alum_email as EMAIL, isnull(alum_edad,'') as EDAD,isnull(alum_pais, '') as PAIS, isnull(alum_ciudad,'') as CIUDAD,CASE alum_institucion WHEN '0' THEN '' ELSE isnull(alum_institucion,'') END as INSTITUCION, CONVERT(VARCHAR(10), alum_fec_creacion, 103) + ' '  + convert(VARCHAR(8), alum_fec_creacion, 14) as 'FECHA INSCRIPCION' FROM tbl_alumno WHERE alum_nombre <> 'invitado' AND alum_id NOT IN (1,2,6,10,15) AND alum_fec_creacion >= DATEADD(day,-7, GETDATE())", function (err, recordset) {  
                                    if (err) res.status(502).json(err)
                                    var jsondata=JSON.stringify(recordset.recordset[0]);
                                    res.send(jsondata);
                                    
                                });
                            });
                            };

                            const consolidado1= (req, res =response)=> {
                                var sql = require("mssql");
                                sql.connect(dbconnection, function (err) {
                                    if (err) console.log(err);
                                    var request = new sql.Request();
                                    request.query("SELECT  ( SELECT COUNT(alum_id)  from nitesthao_2022.dbo.tbl_alumno where alum_nombre <> 'invitado' AND alum_id NOT IN (1,2,6,10,15))AS 'total_inscritos',(SELECT COUNT(alum_id) AS 'ultimos_inscritos'FROM nitesthao_2022.dbo.tbl_alumno WHERE alum_fec_creacion >= DATEADD(day,-7, GETDATE()) AND alum_nombre <> 'invitado' AND alum_id NOT IN (1,2,6,10,15))AS 'ultimos_inscritos',(SELECT COUNT(*) AS 'total_certificados' FROM (SELECT MAX(t.test_punt_obtenido) as  test_punt_obtenido FROM nitesthao_2022.dbo.tbl_alumno a INNER JOIN nitesthao_2022.dbo.tbl_test t1 on t1.alum_id = a.alum_id INNER JOIN (SELECT  MAX(test_punt_obtenido) as test_punt_obtenido, alum_id , test_tipo_test FROM nitesthao_2022.dbo.tbl_test WHERE test_punt_obtenido is not null AND token IS NOT NULL GROUP BY alum_id,test_tipo_test ) t on t1.alum_id = t.alum_id and t.test_tipo_test = t1.test_tipo_test and t1.test_punt_obtenido = t.test_punt_obtenido INNER JOIN tbl_tipo_test tt on tt.tipo_test_id = t.test_tipo_test WHERE   a.alum_nombre <> 'Invitado' AND a.alum_ape_paterno <> 'Invitado' AND a.alum_ape_materno <> 'Invitado' group by t1.test_punt_obtenido ,a.alum_id,a.alum_username,a.alum_password,a.alum_nombre,alum_rut,a.alum_ape_paterno,a.alum_ape_materno ,tt.tipo_test_nombre,t.test_tipo_test,a.alum_ciudad, a.alum_institucion) t)AS 'total_certificados',(SELECT COUNT(*)  FROM nitesthao_2022.dbo.tbl_test)AS'total_Test_Rendidos'", function (err, recordset) {  
                                        if (err) res.status(502).json(err)
                                        var jsondata=JSON.stringify(recordset.recordset[0]);
                                        res.send(jsondata);
                                        
                                    });
                                });
                                };


                
    module.exports={
        consolidado2,
        Ultimosinscritos7,
        consolidado1
        
            }