const{response}=require (`express`);
const { dbconnection } = require('../dbconect/config');

const XLSX = require('xlsx')

const usuariosdescargar= (req, res =response)=> {
    var sql = require("mssql");
    sql.connect(dbconnection, function (err) {
        if (err)res.status(53).send({ error: 'No se pudo realizar la conexion a la base de datos' });
        var request = new sql.Request();
        request.query("select alum_nombre,alum_ape_paterno,alum_ape_materno,alum_email,alum_edad,alum_pais,alum_ciudad,alum_institucion,alum_fec_creacion from nitesthao_2022.dbo.tbl_alumno where alum_activo='true'", function (err, recordset) {  
        
            const jsonData = JSON.parse(JSON.stringify(recordset.recordset));
            
            const convertJsonToExcel = () => {

                const workSheet = XLSX.utils.json_to_sheet(jsonData);
                const workBook = XLSX.utils.book_new();
            //modificar el nombre de el archivo que se descarga modificando el valor  "estudiantes"
                XLSX.utils.book_append_sheet(workBook, workSheet, "estudiantes")
                XLSX.write(workBook, { bookType: 'xlsx', type: "buffer" })
                XLSX.write(workBook, { bookType: "xlsx", type: "binary" })
                XLSX.writeFile(workBook, "estudiantes.xlsx")
            
            }
            res.json(recordset.recordset);
            convertJsonToExcel()
            
        });
    });
    };
   
    
    module.exports={
        usuariosdescargar
        
            }