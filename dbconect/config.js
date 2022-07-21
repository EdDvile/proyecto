const sql = require("mssql")
const dbconnection = async()=>{
    const config = {
        user: process.env.USER,
        password: process.env.PASSWORD,
        server: process.env.SERVER, 
        database: process.env.DATABASE ,
        port: parseInt(process.env.DBPORT),
        trustServerCertificate: true
    };
try {
    
    await sql.connect(config)
    console.log("base de datos funcionando")
} catch (error) {
console.log(error)
    
}


}
module.exports={
dbconnection

}